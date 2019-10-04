import React from "react";
import styled from "styled-components";

import Iphone from "containers/iphone";
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

const renderCurrentView = (str, cb) => {
  let view;

  if (str === "spongebob") {
    view = (
      <Timelater
        bg={"images/2-months-later.png"}
        text={"2-3 Months Later"}
        cb={cb}
      />
    );
  } else if (str === "grand-central") {
    view = <NeonLetters cb={cb} />;
  } else if (str === "end") {
    view = <InCrustWeTrust cb={cb} />;
  } else {
    view = <Iphone cb={cb} />;
  }

  return view;
};

const App = ({ screen, setScreen }) => {
  return (
    <StyledViewContainer>
      {renderCurrentView(screen, setScreen)}
    </StyledViewContainer>
  );
};

export default App;
