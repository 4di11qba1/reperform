import React, { useState } from "react";
import { logo } from "../assets";
import { colors } from "../constants/colors";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { isInvalidEmail } from '../utils/validations'

function Auth() {
  // const [email, setEmail] = useState("")

  // useEffect(() => {
  //     var msg = document.getElementById('validation-message-email')
  //     if (isInvalidEmail(email)) {
  //         msg.innerText = "Please enter a valid email"
  //     }
  //     else {
  //         msg.innerText = ""
  //     }
  // }, [email])

  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div className="auth">
      <div className="logo" style={{ backgroundColor: colors.primary }}>
        <img src={logo} className="logo-image" />
      </div>
      <div className="auth-form-wrapper">
        {showLogin ? (
          <Login handleShowLogin={handleShowLogin} />
        ) : (
          <SignUp handleShowLogin={handleShowLogin} />
        )}
        {/* <p className='auth-p'><span style={{color: '#7D8197'}}>{year} &copy;</span> <span style={{fontWeight: 'bolder'}}>Reperform</span></p> */}
        <Footer position={"relative"} />
      </div>
    </div>
  );
}

export default Auth;
