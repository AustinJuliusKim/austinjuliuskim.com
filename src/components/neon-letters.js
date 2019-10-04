import React from "react";
import styled from "styled-components";

const Background = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const NeonLetters = ({ cb }) => {
  return (
    <Background onClick={cb}>
      <img src="images/grand-central-market.gif" style={{ width: "100%" }} />
    </Background>
  );
};

export default NeonLetters;
