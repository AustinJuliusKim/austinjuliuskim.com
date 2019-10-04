import React, { useState, useEffect } from "react";

import App from "components/app";

export default () => {
  const [screen, setScreen] = useState("");

  return <App screen={screen} setScreen={setScreen} />;
};
