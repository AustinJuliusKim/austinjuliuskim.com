import * as cdk from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import {
  BucketDeployment,
  Source as S3Asset
} from "@aws-cdk/aws-s3-deployment";
import {
  IHostedZone,
  HostedZone,
  ARecord,
  AddressRecordTarget
} from "@aws-cdk/aws-route53";
import { CloudFrontTarget } from "@aws-cdk/aws-route53-targets";
import { IStringParameter, StringParameter } from "@aws-cdk/aws-ssm";
import {
  CloudFrontWebDistribution,
  CfnCloudFrontOriginAccessIdentity
} from "@aws-cdk/aws-cloudfront";
import { CanonicalUserPrincipal } from "@aws-cdk/aws-iam";
import * as path from "path";

const stringParam = (parent: cdk.Stack, name: string): IStringParameter =>
  StringParameter.fromStringParameterName(
    parent,
    `${name}Param`,
    `/Web/Config/${name}`
  );

class Website extends cdk.Stack {
  assetsBucket: Bucket;
  cloudfront: CloudFrontWebDistribution;
  hostedZone: IHostedZone;
  aliasRecord: ARecord;
  constructor(parent: cdk.App, id: string) {
    super(parent, id, { env: { region: "us-east-1" } });

    const getParam = (name: string): IStringParameter =>
      stringParam(this, name);

    const subdomainParam = getParam("SUBDOMAIN");
    const certificateArnParam = getParam("CERTIFICATE_ARN");
    const hostedZoneIdParam = getParam("HOSTED_ZONE_ID");
    const hostedZoneNameParam = getParam("HOSTED_ZONE_NAME");

    const domain = `${subdomainParam.stringValue}.${hostedZoneNameParam.stringValue}`;

    const originAccessRole = new CfnCloudFrontOriginAccessIdentity(
      this,
      "OriginAccessIdentity",
      {
        cloudFrontOriginAccessIdentityConfig: {
          comment: "WebsiteAssetsAccessIdentity"
        }
      }
    );

    const accessRolePrincipal = new CanonicalUserPrincipal(
      originAccessRole.attrS3CanonicalUserId
    );

    this.assetsBucket = new Bucket(this, "AssetsBucket");
    this.assetsBucket.grantRead(accessRolePrincipal);

    this.cloudfront = new CloudFrontWebDistribution(this, "CfDistribution", {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: this.assetsBucket,
            originAccessIdentityId: originAccessRole.ref
          },
          behaviors: [
            {
              isDefaultBehavior: true,
              maxTtl: cdk.Duration.seconds(0),
              minTtl: cdk.Duration.seconds(0),
              defaultTtl: cdk.Duration.seconds(0)
            },
            {
              pathPattern: "/*.html",
              maxTtl: cdk.Duration.seconds(0),
              minTtl: cdk.Duration.seconds(0),
              defaultTtl: cdk.Duration.seconds(0)
            }
          ]
        }
      ],
      errorConfigurations: [
        {
          errorCode: 404,
          responseCode: 200,
          responsePagePath: "/index.html"
        }
      ],
      aliasConfiguration: {
        acmCertRef: certificateArnParam.stringValue,
        names: [domain]
      }
    });

    this.hostedZone = HostedZone.fromHostedZoneAttributes(this, "HostedZone", {
      hostedZoneId: hostedZoneIdParam.stringValue,
      zoneName: hostedZoneNameParam.stringValue
    });

    new ARecord(this, "ARecord", {
      recordName: subdomainParam.stringValue,
      target: AddressRecordTarget.fromAlias(
        new CloudFrontTarget(this.cloudfront)
      ),
      zone: this.hostedZone
    });
  }
}

class WebsiteDeploy extends cdk.Stack {
  constructor(parent: cdk.App, id: string, { bucket }: { bucket: Bucket }) {
    super(parent, id, { env: { region: "us-east-1" } });
    new BucketDeployment(this, "DeployAssets", {
      sources: [S3Asset.asset(path.resolve("dist"))],
      destinationBucket: bucket
    });
  }
}

class App extends cdk.App {
  constructor() {
    super();
    const { assetsBucket } = new Website(this, "Website");
    new WebsiteDeploy(this, "WebsiteDeploy", {
      bucket: assetsBucket
    });
  }
}

new App();
