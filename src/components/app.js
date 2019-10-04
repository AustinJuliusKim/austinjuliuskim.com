import React from "react";
import styled from "styled-components";

import Iphone from "./iphone";
import Timelater from "./timelater";
import InCrustWeTrust from "./incrustwetrust";
import NeonLetters from "./neon-letters";

import { screen as SCREENS } from "data/screen";

const StyledViewContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const renderCurrentView = (count, cb1, cb2) => {
  let view;

  switch (count) {
    case 0:
      view = <Iphone cb={cb1} screen={SCREENS[1]} />;
      break;
    case 1:
      view = <Iphone cb={cb1} screen={SCREENS[2]} />;
      break;
    case 2:
      view = <Iphone cb={cb1} screen={SCREENS[3]} />;
      break;
    case 3:
      view = (
        <Timelater
          bg={"images/2-months-later.png"}
          cb={cb1}
          text={"2-3 Months Later"}
        />
      );
      break;
    case 4:
      view = <Iphone cb={cb1} screen={SCREENS[4]} />;
      break;
    case 5:
      view = <Iphone cb={cb1} screen={SCREENS[5]} />;
      break;
    case 6:
      view = <NeonLetters cb={cb1} />;
      break;
    case 7:
      view = (
        <Timelater
          bg={"images/3-years-later.png"}
          cb={cb1}
          text={"3.5 Years Later..."}
        />
      );
      break;
    case 8:
      view = <InCrustWeTrust cb={cb2} />;
  }

  return view;
};

const App = ({ screen, handleClick, resetClick }) => {
  return (
    <StyledViewContainer>
      {renderCurrentView(screen, handleClick, resetClick)}
    </StyledViewContainer>
  );
};

export default App;
