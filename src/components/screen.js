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
  img {
    width: 100%;
  }
`;

const Screen = ({ currentScreen, nextScreen }) => {
  return (
    <IphoneScreen>
      {currentScreen && <img src={currentScreen} alt="" />}
      {/* {nextScreen ? <img src={nextScreen} alt="" /> : null} */}
      {/* <Message /> */}
    </IphoneScreen>
  );
};

export default Screen;
