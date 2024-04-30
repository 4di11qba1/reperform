import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/colors";
import Divider from "./Divider";
import Success from "./Success";

const Form = ({ heading, showControls = true, children }) => {
  const [success, setSuccess] = useState(false);
  const nav = useNavigate();

  const handleSuccess = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Redirect to '/dashboard/' after 3 seconds
    setTimeout(() => {
      nav("/dashboard/");
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      {success ? (
        <Success text={"Submitted Successfully"} />
      ) : (
        <form className="form">
          <div className="form-header">
            <h3 style={{ color: colors.secondary }}>{heading}</h3>
            <Divider orientation="h" width={"2px"} />
          </div>

          {children}

          {showControls && (
            <div className="form-footer">
              <Divider orientation={"h"} width={"2px"} />

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "50%",
                  alignSelf: "center",
                }}
              >
                <button
                  type="submit"
                  className="control-btn"
                  style={{
                    color: colors.white,
                    backgroundColor: colors.controlBTN,
                  }}
                  onClick={(e) => handleSuccess(e)}
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
          )}
        </form>
      )}
    </>
  );
};

export default Form;
