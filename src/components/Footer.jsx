import React from "react";
import { colors } from "../constants/colors";

function Footer({ position }) {
  const year = new Date().getFullYear();
  return (
    <footer style={{ position: position, backgroundColor: colors.white }}>
      <span style={{ color: colors.dimText }}>{year} &copy; </span>
      Reperform
    </footer>
  );
}

export default Footer;
