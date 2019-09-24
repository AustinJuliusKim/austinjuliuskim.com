import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "global-style";
import App from "./components/app";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("index")
);
