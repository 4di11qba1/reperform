import React from "react";
import { colors } from "../constants/colors";
import { useNavigate } from "react-router-dom";

function Login({ handleShowLogin }) {
  const nav = useNavigate();
  const navigateTo = (e, r) => {
    e.preventDefault();
    nav(r);
  };
  return (
    <>
      <form className="login-form">
        <div>
          <h2 className="form-header">Welcome to Reperform</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p className="form-text" style={{ color: colors.dimText }}>
              New Here?
            </p>
            <a
              className="form-button"
              onClick={handleShowLogin}
              style={{ color: colors.controlBTN }}
            >
              Create an Account
            </a>
          </div>
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="eml" aria-label="Email">
            Email
          </label>
          <input
            id="eml"
            type="text"
            name="email"
            // required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="on"
          />
          {/* <p className='danger form-p' id='validation-message-email'></p> */}
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="pwd" aria-label="Password">
            Password{" "}
            <a
              href="#"
              className="form-button"
              style={{ color: colors.controlBTN }}
            >
              Forgot Password?
            </a>
          </label>
          <input id="pwd" type="password" name="password" /*required*/ />
          {/* <p className='danger' id='validation-message-password'></p> */}
        </div>
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
      </form>
    </>
  );
}

export default Login;
