import React, { useState } from "react";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";

function SignUp({ handleShowLogin }) {
  const [agent, setAgent] = useState(false);
  const nav = useNavigate();
  const navigateTo = (e, r) => {
    e.preventDefault();
    nav(r);
  };

  const handleAgent = () => {
    document.getElementById("selection").value === "agent"
      ? setAgent(true)
      : setAgent(false);
  };
  return (
    <form className="signup-form" style={{ paddingTop: "0" }}>
      <div>
        <h2 className="form-header">Sign Up</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p className="form-text">Enter details to create your account</p>
        </div>
      </div>
      <div className="form-input-wrapper">
        <input
          type="text"
          name="name"
          // required
          placeholder="Full Name"
          autoComplete="on"
        />
        <input
          type="text"
          name="email"
          // required
          placeholder="Email"
          autoComplete="on"
        />
        <input
          type="phone"
          name="phone"
          // required
          placeholder="Mobile"
          autoComplete="on"
        />
        <input
          type="text"
          name="office"
          // required
          placeholder="Office Name"
          autoComplete="on"
        />
        <select id="selection" name="role" onChange={(e) => handleAgent()}>
          <option value="principal">Principal</option>
          <option value="agent">Agent</option>
          <option value="property-manager">Property Manager</option>
        </select>
        {agent && (
          <input
            type="text"
            name="principal-code"
            // required
            placeholder="Principal Code (optional)"
            autoComplete="on"
          />
        )}
        <input
          type="password"
          name="password"
          // required
          placeholder="Password"
        />
        <input
          type="password"
          name="confirm-password"
          // required
          placeholder="Confirm Password"
        />
      </div>
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <button
          type="submit"
          className="control-btn"
          onClick={(e) => navigateTo(e, "/dashboard")}
          style={{
            color: colors.white,
            backgroundColor: colors.controlBTN,
            fontSize: "17px",
          }}
        >
          Sign In
        </button>
        <button
          type="button"
          className="control-btn-revert"
          style={{
            color: colors.controlBTN,
            backgroundColor: colors.controlRevertBTN,
            fontSize: "17px",
          }}
          onClick={handleShowLogin}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SignUp;
