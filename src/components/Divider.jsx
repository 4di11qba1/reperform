import React from "react";
import { colors } from "../constants/colors";

function Divider({ orientation, width }) {
  return (
    <div
      style={{
        width: orientation === "h" ? "100%" : width,
        height: orientation === "h" ? width : "100%",
        backgroundColor: colors.border,
      }}
    ></div>
  );
}

export default Divider;
