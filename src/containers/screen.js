import React, { useState } from "react";

import Screen from "components/screen";

const screenOrder = {
  1: {
    id: 1,
    src: "/images/Tinder-1.png"
  },
  2: {
    id: 2,
    messages: [1, 2]
  },
  3: {
    id: 3,
    src: "/images/CMB-1.png"
  },
  4: {
    id: 4,
    src: "/images/Tinder-2.png"
  },
  5: {
    id: 5,
    message: [3, 4, 5]
  }
};

const messages = {
  1: {
    text: "So you're a designer?",
    type: "received"
  },
  2: {
    text: "So you're a developer?",
    type: "sent"
  },
  3: {
    text: "*Insert Witty Pickup Line Here*",
    type: "received"
  },
  4: {
    text: "*Insert Witty Response Here*",
    type: "sent"
  },
  5: {
    text: "Date?",
    type: "received"
  }
};

export default () => {
  const initialScreen = "/images/Tinder-1.png";
  const [currentScreen, setCurrentScreen] = useState(initialScreen);
  const [nextScreen, setNextScreen] = useState(null);

  return <Screen currentScreen={currentScreen} nextScreen={nextScreen} />;
};
