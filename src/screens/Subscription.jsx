import React, { useState } from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";
import CreditCard from "../components/CreditCard";

function Subscription() {
  const nav = useNavigate();
  const [showCredit, setShowCredit] = useState(false);

  const handleCredit = () => {
    setShowCredit(!showCredit);
  };
  return (
    <div className="subscription">
      <button
        className="control-btn-revert"
        style={{
          width: "10%",
          color: colors.controlBTN,
          backgroundColor: colors.controlRevertBTN,
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        onClick={() => nav("/")}
      >
        Sign Out
      </button>
      <SubscriptionCard
        heading={"Monthly"}
        price={"24.99"}
        handleCredit={handleCredit}
      />
      <SubscriptionCard
        heading={"Annual"}
        desc={"($22.49 per month - 10% discount)"}
        price={"269.90"}
        handleCredit={handleCredit}
      />
      <SubscriptionCard
        heading={"Two Year"}
        desc={"($19.99 per month - 20% discount)"}
        price={"479.81"}
        handleCredit={handleCredit}
      />
      {showCredit && (
        <CreditCard
          user={"Adil"}
          price={"479.81"}
          handleCredit={handleCredit}
        />
      )}
    </div>
  );
}

export default Subscription;
