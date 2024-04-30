import React from "react";
import Divider from "./Divider";
import { colors } from "../constants/colors";

function SubscriptionCard({ heading, desc, price, handleCredit }) {
  return (
    <div className="subscription-card">
      <h2>{heading}</h2>
      <p>{desc}</p>
      <h2>${price}</h2>
      <Divider orientation={"h"} width={"2px"} />
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <button
          className="control-btn"
          style={{
            color: colors.white,
            backgroundColor: colors.controlBTN,
          }}
        >
          Pay with PayPal
        </button>
        <button
          className="control-btn"
          style={{
            color: colors.white,
            backgroundColor: colors.controlBTN,
          }}
          onClick={handleCredit}
        >
          Pay with Credit Card
        </button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
