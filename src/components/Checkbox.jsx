import React from "react";

function Checkbox({ fontSize, width, text }) {
  return (
    <div
      style={{
        display: "flex",
        width: width,
        fontSize: fontSize,
        gap: "5px",
        alignItems: "center",
      }}
    >
      <input type="checkbox" style={{ width: "13px", height: "13px" }} />
      <label style={{ fontWeight: "bolder" }}>{text}</label>
    </div>
  );
}

export default Checkbox;
