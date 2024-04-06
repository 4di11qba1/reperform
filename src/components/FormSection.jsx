import React from "react";
import Checkbox from "./Checkbox";

function FormSection({ sectionData, inputWidth = "50%" }) {
  return (
    <>
      <div className="property-section">
        <h3>{sectionData.heading}</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {sectionData.fields.map((field, index) => (
            <React.Fragment key={index}>
              {field.map((item, index) => (
                <React.Fragment key={index}>
                  {field.type === "checkbox" ? (
                    <Checkbox
                      id={item.id}
                      fontSize={"13px"}
                      width={"13px"}
                      text={item.text}
                    />
                  ) : (
                    <>
                      <div
                        key={index}
                        className="form-input-div"
                        style={{
                          width: inputWidth,
                        }}
                      >
                        <label htmlFor={item.id}>{item.label}</label>
                        {field.type === "select" ? (
                          <select>
                            {item.options.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={item.id}
                            type={item.type}
                            name={item.name}
                            placeholder={item.placeholder}
                            required={item.required}
                          />
                        )}
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormSection;
