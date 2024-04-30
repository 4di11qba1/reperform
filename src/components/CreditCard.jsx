import React from "react";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";

function CreditCard({ user, price, handleCredit }) {
  const nav = useNavigate();
  const navigate = (url) => {
    nav(url);
  };
  return (
    <form className="credit-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          width: "100%",
        }}
      >
        <h2>Reperform Subcription</h2>
        <button
          className="control-btn-revert"
          type="button"
          style={{
            color: colors.controlBTN,
            backgroundColor: colors.controlRevertBTN,
            width: "40px",
          }}
          onClick={handleCredit}
        >
          X
        </button>
      </div>
      <input type="number" placeholder="Enter Card Number" />
      <input type="number" placeholder="MM/YY" />
      <input type="number" placeholder="CVC" />
      <button
        type="button"
        className="control-btn"
        style={{ color: colors.white, backgroundColor: colors.controlBTN }}
        onClick={() => navigate("/dashboard")}
      >
        Pay ${price}
      </button>
    </form>
  );
}

export default CreditCard;
