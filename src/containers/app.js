import React, { useState } from "react";

import App from "components/app";

export default () => {
  const [screen, setScreen] = useState(0);
  const handleClick = () => setScreen(screen + 1);
  const resetClick = () => setScreen(0);
  return (
    <App screen={screen} handleClick={handleClick} resetClick={resetClick} />
  );
};
