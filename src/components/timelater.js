import React from "react";
import styled from "styled-components";

const Background = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: 120px;
  color: white;
  text-align: center;
`;

const Timelater = ({ text, bg, cb }) => (
  <Background
    onClick={cb}
    style={{
      background: `url(${bg})`
    }}
  >
    <Text className={"sometimelater"}>{text}</Text>
  </Background>
);

export default Timelater;
