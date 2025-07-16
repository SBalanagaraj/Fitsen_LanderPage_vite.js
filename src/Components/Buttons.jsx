import React from "react";

function Buttons({ titles = "" }) {
  return <button className="btnComponent">{titles}</button>;
}

export default Buttons;
