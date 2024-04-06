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
                  className="form-step__icon"
                  style={{
                    color: index + 1 <= step && colors.white,
                    backgroundColor: index + 1 <= step && colors.controlBTN,
                  }}
                >
                  {s.icon}
                </div>{" "}
                {s.mainLabel}
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

const steps = [
  {
    mainLabel: "Lead Generation",
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
    sections: [
      {
        heading: "Connected Calls",
        dynamic: false,
        fields: [
          [
            {
              id: 0,
              label: "Connected Calls",
              name: "calls",
              type: "number",
              placeholder: "Enter Number",
            },
            {
              id: 1,
              label: "Leads",
              name: "cLeads",
              type: "number",
              placeholder: "Enter Number",
            },
          ],
        ],
      },
      {
        heading: "Doorknocks",
        dynamic: false,
        fields: [
          [
            {
              id: 0,
              label: "Face to Face Connects",
              name: "f2fconnects",
              type: "number",
              placeholder: "Enter Number",
            },
            {
              id: 1,
              label: "Leads",
              name: "fLeads",
              type: "number",
              placeholder: "Enter Number",
            },
          ],
        ],
      },
    ],
  },
  {
    mainLabel: "Pitching",
    icon: <FontAwesomeIcon icon={faFileAlt} />,
    sections: [
      {
        heading: "Market Appraisals Booked",
        dynamic: true,
        fields: [
          [
            {
              id: 1,
              label: "Number",
              name: "name",
              type: "number",
              placeholder: "Enter Number",
            },
          ],
        ],
      },
      {
        heading: "Listing Presentations",
        dynamic: true,
        fields: [
          [
            {
              id: 2,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 3,
              label: "Listing Type",
              name: "listing",
              type: "select",
              placeholder: "Select Listing Type",
              options: ["Residential", "Commercial", "Land"],
            },
          ],
        ],
      },
    ],
  },
  {
    mainLabel: "Closing",
    icon: <FontAwesomeIcon icon={faCheck} />,
    sections: [
      {
        heading: "Listings - Agency Agreement Signed",
        dynamic: true,
        fields: [
          [
            {
              id: 4,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 5,
              label: "Select Method of Sale",
              name: "methodSales",
              type: "select",
              placeholder: "Select Method",
              options: ["Auction", "Private Treaty"],
            },
          ],
        ],
      },
      {
        heading: "Offers Recieved",
        dynamic: true,
        fields: [
          [
            {
              id: 6,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 7,
              label: "Offer",
              name: "offer",
              type: "number",
              placeholder: "Enter Amount",
            },
          ],
        ],
      },
      {
        heading: "Auctions Held",
        dynamic: true,
        fields: [
          [
            {
              id: 8,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 9,
              label: "Outcome",
              name: "outcome",
              type: "select",
              placeholder: "Select Outcome",
              options: ["Sold at Auction", "Passed In"],
            },
            {
              id: 10,
              label: "Result",
              name: "result",
              type: "number",
              placeholder: "Enter Amount",
            },
          ],
        ],
      },
      {
        heading: "Exchanged Contracts",
        dynamic: true,
        fields: [
          [
            {
              id: 11,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 12,
              label: "Sale Price",
              name: "salePrice",
              type: "number",
              placeholder: "Enter Amount",
            },
            {
              id: 13,
              label: "Commission Rate (GST incl)",
              name: "comRate",
              type: "number",
              placeholder: "%",
            },
            {
              id: 14,
              label: "Gross Commission",
              name: "gCom",
              type: "number",
              placeholder: "Enter Commission",
            },
            {
              id: 15,
              label: "Condition",
              name: "condition",
              type: "select",
              placeholder: "Select Condition",
              options: ["Conditional", "Unconditional"],
            },
          ],
        ],
      },
      {
        heading: "Settlements",
        dynamic: true,
        fields: [
          [
            {
              id: 16,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
          ],
        ],
      },
    ],
  },
  {
    mainLabel: "Inspections & Other",
    icon: <FontAwesomeIcon icon={faBullseye} />,
    sections: [
      {
        heading: "Other - Photography Shoots Attended",
        dynamic: true,
        fields: [
          [
            {
              id: 17,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
          ],
        ],
      },
      {
        heading: "Other - Building & Pest Inspections Attended",
        dynamic: true,
        fields: [
          [
            {
              id: 18,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
          ],
        ],
      },
      {
        heading: "Other - Valuations Attended",
        dynamic: true,
        fields: [
          [
            {
              id: 19,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
          ],
        ],
      },
      {
        heading: "Inspections - Private Buyer Inspections",
        dynamic: true,
        fields: [
          [
            {
              id: 20,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 21,
              label: "Number of Inspections",
              name: "inspections",
              type: "number",
              placeholder: "Enter Inspections",
            },
          ],
        ],
      },
      {
        heading: "Inspections - Open Home",
        dynamic: true,
        fields: [
          [
            {
              id: 22,
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter Address",
            },
            {
              id: 23,
              label: "Number of Attendees",
              name: "numAttendees",
              type: "number",
              placeholder: "Enter Number",
            },
          ],
        ],
      },
    ],
  },
  {
    mainLabel: "Training & Wellness",
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
    sections: [
      {
        heading: "Training",
        dynamic: false,
        fields: [
          [
            {
              id: 24,
              type: "checkbox",
              text: "Podcast - Real Estate or Mindset",
            },
            {
              id: 25,
              type: "checkbox",
              text: "Video - YouTube Real Estate Training",
            },
            {
              id: 26,
              type: "checkbox",
              text: "Webinar - Real Estate Training",
            },
            {
              id: 27,
              type: "checkbox",
              text: "Live Training Session or Zoom Presentations",
            },
            {
              id: 28,
              type: "checkbox",
              text: "Other",
            },
          ],
        ],
      },
      {
        heading: "Wellness",
        dynamic: false,
        fields: [
          [
            {
              id: 29,
              type: "checkbox",
              text: "Exercise - gym, run, walk, sport",
            },
          ],
        ],
      },
      {
        heading: "Meeting",
        dynamic: false,
        fields: [
          [
            {
              id: 30,
              type: "checkbox",
              text: "Sales Meeting",
            },
            {
              id: 31,
              type: "checkbox",
              text: "Networking Event",
            },
          ],
        ],
      },
    ],
  },
];
