import React from "react";

const Timelater = ({ text, bg }) => (
  <div
    style={{
      alignItems: "center",
      background: `url(${bg})`,
      display: "flex",
      height: "100%",
      justifyContent: "center",
      width: "100%"
    }}
  >
    <p
      className={"sometimelater"}
      style={{
        fontSize: 120,
        color: "white"
      }}
    >
      {text}
    </p>
  </div>
);

export default Timelater;
