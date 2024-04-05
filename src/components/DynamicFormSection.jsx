import React, { useState } from "react";
import { colors } from "../constants/colors";

function DynamicFormSection({ predefinedSection }) {
  const [section, setSection] = useState(predefinedSection);

  const addInputField = () => {
    const newInputFields = predefinedSection.inputFields[0].map(
      (field, index) => ({
        ...field,
        id: `${field.id}-${section.inputFields.length}-${index}`,
      })
    );

    const updatedInputFields = [...section.inputFields, newInputFields];
    const updatedSection = {
      ...section,
      inputFields: updatedInputFields,
    };
    setSection(updatedSection);
  };

  const removeInputField = (arrayIndex) => {
    const updatedInputFields = section.inputFields.filter(
      (_, idx) => idx !== arrayIndex
    );

    const updatedSection = {
      ...section,
      inputFields: updatedInputFields,
    };

    setSection(updatedSection);
  };

  return (
    <div className="property-section">
      <div className="section-header">
        <h4>{section.heading}</h4>
        <button
          className="control-btn-revert"
          style={{
            color: colors.controlBTN,
            backgroundColor: colors.controlRevertBTN,
            width: "40px",
            height: "40px",
            fontSize: "25px",
            padding: "0",
          }}
          type="button"
          onClick={addInputField}
        >
          +
        </button>
      </div>
      {section.inputFields.map((itemArray, arrayIndex) => (
        <div key={arrayIndex}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {itemArray.map((item, index) => (
              <div className="form-input-div" key={index}>
                <label
                  htmlFor={`${item.id}-${arrayIndex}-${index}`}
                  aria-label={item.label}
                >
                  {item.label}
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <input
                    id={`${item.id}-${arrayIndex}-${index}`} // Use unique ID
                    name={`${item.id}-${arrayIndex}-${index}`} // Use unique ID
                    type="text"
                    placeholder={item.placeholder}
                  />
                </div>
              </div>
            ))}
            {section.inputFields.length > 1 && (
              <button
                className="control-btn-revert"
                style={{
                  color: colors.controlBTN,
                  backgroundColor: colors.controlRevertBTN,
                  width: "40px",
                  height: "40px",
                  fontSize: "25px",
                  padding: "0",
                  marginTop: "24px",
                }}
                type="button"
                onClick={() => removeInputField(arrayIndex)}
              >
                -
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicFormSection;
