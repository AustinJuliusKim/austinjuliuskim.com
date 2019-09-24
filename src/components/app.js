import React from "react";
import styled from "styled-components";

import Iphone from "./iphone";

const StyledViewContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <StyledViewContainer>
      <Iphone />
    </StyledViewContainer>
  );
};

export default App;
