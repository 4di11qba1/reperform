import React from "react";
import { colors } from "../constants/colors";
import Divider from "./Divider";

const FormStep = ({
  step,
  formData,
  handleChange,
  prevStep,
  nextStep,
  stepContent,
  handleBack,
  length,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>{`Step ${step}: ${stepContent.label}`}</h2>
      {stepContent.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
          />
        </div>
      ))}
      <Divider orientation={"h"} width={"1.5px"} />
      <div
        className="step-buttons"
        style={{ justifyContent: step === 1 ? "center" : "space-between" }}
      >
        {step !== 1 && (
          <button
            className="control-btn-revert"
            style={{
              color: colors.controlBTN,
              backgroundColor: colors.controlRevertBTN,
            }}
            type="button"
            onClick={prevStep}
          >
            Previous
          </button>
        )}
        {step !== length && (
          <button
            className="control-btn"
            style={{
              color: colors.white,
              backgroundColor: colors.controlBTN,
            }}
            type="button"
            onClick={nextStep}
          >
            Next
          </button>
        )}
        {step === length && (
          <button
            className="control-btn"
            style={{
              color: colors.white,
              backgroundColor: colors.controlBTN,
            }}
            type="submit"
            onClick={(e) => handleBack(e)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormStep;
