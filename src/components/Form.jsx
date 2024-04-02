import React from "react";
import { colors } from "../constants/colors";
import Divider from "./Divider";

const Form = ({ heading, children }) => {
  return (
    <form className="form">
      <div className="form-header">
        <h3 style={{ color: colors.secondary }}>{heading}</h3>
        <Divider orientation="h" width={"2px"} />
      </div>

      {children}

      <div className="form-footer">
        <Divider orientation={"h"} width={"2px"} />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            className="control-btn"
            style={{ color: colors.white, backgroundColor: colors.controlBTN }}
          >
            Submit
          </button>
          <button
            type="button"
            className="control-btn-revert"
            style={{
              color: colors.controlBTN,
              backgroundColor: colors.controlRevertBTN,
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
