import React from "react";
import { colors } from "../constants/colors";
import Divider from "./Divider";
import FormSection from "./FormSection";
import DynamicFormSection from "./DynamicFormSection";

const FormStep = ({
  step,
  prevStep,
  nextStep,
  stepContent,
  handleBack,
  length,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {stepContent.sections.map((section, index) => (
        <React.Fragment key={index}>
          {section.dynamic ? (
            <>
              <Divider orientation={"h"} width={"1.5px"} />
              <DynamicFormSection predefinedSection={section} />
            </>
          ) : (
            <>
              <Divider orientation={"h"} width={"1.5px"} />
              <FormSection sectionData={section} inputWidth="50%" />
            </>
          )}
        </React.Fragment>
      ))}
      <Divider orientation={"h"} width={"2px"} />
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
