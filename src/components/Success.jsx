import React from "react";
import Tick from "./Tick";

function Success({ text }) {
  return (
    <div className="success">
      <Tick />
      <p className="success-text">{text}</p>
    </div>
  );
}

export default Success;
