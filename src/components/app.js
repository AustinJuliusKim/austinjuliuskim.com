import React from "react";
import styled from "styled-components";

import Iphone from "./iphone";
import Timelater from "./timelater";
import InCrustWeTrust from "./incrustwetrust";
import NeonLetters from "./neon-letters";

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
      {/* <Timelater
        bg={"images/Later_That_Night_Blank.png"}
        text="Many Months Later"
      /> */}
      {/* <Iphone /> */}
      {/* <InCrustWeTrust /> */}
      {/* <NeonLetters /> */}
    </StyledViewContainer>
  );
};

export default App;
