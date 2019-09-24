import React from "react";
import styled from "styled-components";

import Iphone from "./iphone";
import Timelater from "./timelater";

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
      <Timelater
        bg={"images/Later_That_Night_Blank.png"}
        text="Many Months Later"
      />
    </StyledViewContainer>
  );
};

export default App;
