import React, { useState } from "react";
import { colors } from "../constants/colors";

function DynamicFormSection({ predefinedSection, inputWidth = "35%" }) {
  const [section, setSection] = useState(predefinedSection);

  const addInputField = () => {
    const newInputFields = predefinedSection.fields[0].map((field, index) => ({
      ...field,
      id: `${field.id}-${section.fields.length}-${index}`,
    }));

    const updatedInputFields = [...section.fields, newInputFields];
    const updatedSection = {
      ...section,
      fields: updatedInputFields,
    };
    setSection(updatedSection);
  };

  const removeInputField = (arrayIndex) => {
    const updatedInputFields = section.fields.filter(
      (_, idx) => idx !== arrayIndex
    );

    const updatedSection = {
      ...section,
      fields: updatedInputFields,
    };

    setSection(updatedSection);
  };

  return (
    <div className="property-section">
      <div className="section-header">
        <h3>{section.heading}</h3>
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
      {section.fields.map((itemArray, arrayIndex) => (
        <div key={arrayIndex}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {itemArray.map((item, index) => (
              <div
                className="form-input-div"
                style={{ width: itemArray.length <= 1 ? "100%" : inputWidth }}
                key={index}
              >
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
                    width: itemArray.length > 1 ? "100%" : inputWidth,
                  }}
                >
                  {item.type === "select" ? (
                    <select>
                      {item.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={`${item.id}-${arrayIndex}-${index}`} // Use unique ID
                      name={`${item.id}-${arrayIndex}-${index}`} // Use unique ID
                      type="text"
                      placeholder={item.placeholder}
                    />
                  )}
                </div>
              </div>
            ))}
            {section.fields.length > 1 && (
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
