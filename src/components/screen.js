import React from "react";
import styled from "styled-components";

import Message from "./message";

const IphoneScreen = styled.div`
  background: #eee;
  border: 1px solid #fff;
  height: 677px;
  width: 375px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  z-index: 100;
`;

const Slider = styled.div`
  height: 100%;
  position: absolute;
  width: 1400px;
  display: flex;
`;

const Slide = styled.div`
  width: 375px;
`;

const Screen = ({ screen }) => {
  return (
    <IphoneScreen>
      <Slider>
        <Slide>
          {screen.screenType === "msg" ? (
            <Message messages={screen.messages} />
          ) : (
            <img src={screen.src} />
          )}
        </Slide>
      </Slider>
    </IphoneScreen>
  );
};

export default Screen;
