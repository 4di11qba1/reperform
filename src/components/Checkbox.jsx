import React from "react";

function Checkbox({ id, fontSize, width, text }) {
  console.log("Checkbox: ", text);
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
      <input
        id={id}
        type="checkbox"
        style={{ width: "13px", height: "13px" }}
      />
      <label htmlFor={id} style={{ fontWeight: "bolder" }}>
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
