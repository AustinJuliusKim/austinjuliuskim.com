import React from "react";
import styled from "styled-components";

import Screen from "containers/screen";

const IphoneContainer = styled.div`
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
    0 0 30px 0px rgba(0, 0, 0, 0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 877px;
  width: 423px;
  position: relative;
  margin: 30px auto;
  transform: scale(0.8);
`;

const IphoneTop = styled.div`
  padding: 5px 110px 40px;
  position: relative;
`;
const Speaker = styled.div`
  display: block;
  width: 70px;
  height: 6px;
  margin: 0 auto;
  border-radius: 6px;
  background: #292728;
`;
const Camera = styled.div`
  display: block;
  margin: 0 auto;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 13px;
  background: #333;
`;
const Sensor = styled.div`
  display: block;
  width: 15px;
  height: 15px;
  float: left;
  background: #333;
  margin-top: -5px;
  border-radius: 50%;
`;

const Bar = styled.div`
  display: block;
  width: 423px;
  height: 15px;
  border: {
    left: 5px solid #bbb;
    right: 5px solid #bbb;
  }
  position: absolute;
  left: -5px;
`;

const TopBar = styled(Bar)`
  top: 65px;
`;
const BottomBar = styled(Bar)`
  bottom: 65px;
`;

const Buttons = styled.div`
  display: block;
  background: #ccc;
  position: absolute;
  border-radius: 2px 0px 0px 2px;
`;

const OnOff = styled(Buttons)`
  height: 40px;
  width: 3px;
  top: 100px;
  left: -8px;
`;

const UpDownSleep = styled(Buttons)`
  height: 60px;
  width: 5px;
  left: -10px;
`;

const Up = styled(UpDownSleep)`
  top: 170px;
`;

const Down = styled(UpDownSleep)`
  top: 250px;
`;
const Sleep = styled(UpDownSleep)`
  left: auto;
  right: -10px;
  top: 170px;
  border-radius: 0px 2px 2px 0px;
`;

const IphoneBottom = styled.div`
  padding: 10px 0 0;
  span {
    display: block;
    margin: 0 auto;
    width: 68px;
    height: 68px;
    background: #ccc;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      #303233 0%,
      #b5b7b9 50%,
      #f0f2f2 69%,
      #303233 100%
    );
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      left: 4px;
      top: 4px;
    }
  }
`;

const Iphone = ({ handleClick }) => {
  return (
    <IphoneContainer>
      <IphoneTop>
        <Camera />
        <Sensor />
        <Speaker />
      </IphoneTop>
      <TopBar />

      <Screen />
      <div>
        <OnOff />
        <Sleep />
        <Up />
        <Down />
      </div>

      <BottomBar />
      <IphoneBottom>
        <span onClick={handleClick}></span>
      </IphoneBottom>
    </IphoneContainer>
  );
};

export default Iphone;
