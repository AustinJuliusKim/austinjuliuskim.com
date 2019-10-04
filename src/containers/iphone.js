import React, { useState } from "react";

import Iphone from "components/iphone";

export default () => {
  const [action, setAction] = useState(null);
  const handleClick = () => console.log("Clicked");
  return (
    <Iphone action={action} setAction={setAction} handleClick={handleClick} />
  );
};
