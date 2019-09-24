import React, { useState, useEffect } from "react";
import App from "components/app";

const getTimeRemaining = endtime => {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

export default () => {
  /* eslint-disable-next-line */
  const [weddingDate, setDate] = useState("October, 5th 2019");
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(getTimeRemaining(weddingDate));
    console.log(weddingDate);
    // console.log(countdown);
  }, []);

  return <App />;
};
