import React, { useState } from "react";
import { colors } from "../../../constants/colors";
import FormStep from "../../../components/FormStep";
import Form from "../../../components/Form";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faFileAlt,
  faCheck,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [animationDirection, setAnimationDirection] = useState("forward");
  const current = {
    fontWeight: "bold",
    color: colors.controlBTN,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
    setAnimationDirection("forward");
  };

  const prevStep = () => {
    setStep(step - 1);
    setAnimationDirection("backward");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const steps = [
    {
      label: "Lead Generation",
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      fields: [{ label: "Name", name: "name", type: "text", required: true }],
    },
    {
      label: "Pitching",
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      fields: [
        { label: "Email", name: "email", type: "email", required: true },
      ],
    },
    {
      label: "Closing",
      icon: <FontAwesomeIcon icon={faCheck} />,
      fields: [
        { label: "Address", name: "address", type: "text", required: true },
      ],
    },
    {
      label: "Phone Number",
      icon: <FontAwesomeIcon icon={faBullseye} />,
      fields: [{ label: "Phone", name: "phone", type: "text", required: true }],
    },
    {
      label: "Training & Wellness",
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      fields: [{ label: "Phone", name: "phone", type: "text", required: true }],
    },
  ];

  return (
    <Form heading={"SALES - DAILY LOG"} showControls={false}>
      <div className="multi-step-form-body">
        <div className="form-steps">
          {steps.map((s, index) => (
            <div
              key={index}
              style={index + 1 <= step ? current : {}}
              className={`form-step`}
            >
              <div
                className={`form-step__label ${
                  index + 1 <= step ? "active" : ""
                } ${index === 0 && "first"}`}
                onClick={() => setStep(index + 1)}
              >
                <div
                  className="form-step__icon hoverable"
                  style={{
                    color: index + 1 <= step && colors.white,
                    backgroundColor: index + 1 <= step && colors.controlBTN,
                  }}
                >
                  {s.icon}
                </div>{" "}
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait" custom={animationDirection}>
          <motion.div
            key={step}
            initial={{
              x: animationDirection === "forward" ? 100 : -100,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: animationDirection === "forward" ? -100 : 100,
              opacity: 0,
            }}
          >
            <FormStep
              step={step}
              formData={formData}
              handleChange={handleChange}
              prevStep={prevStep}
              nextStep={nextStep}
              stepContent={steps[step - 1]}
              length={steps.length}
              handleBack={handleBack}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Form>
  );
};

export default MultiStepForm;
