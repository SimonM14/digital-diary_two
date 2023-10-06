import React from "react";
import userim from '/Users/USER/digital-diary_two/src/Assets/user.png';

const LogSin = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src=""alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src="/src/Assets/email.png" alt="" />
          <input type="email" placeholder="Email id" />
        </div>
        <div className="input">
          <img src="/src/Assets/password.png" alt="" />
          <input type="password" placeholder="password" />
        </div>
        <div className="forgot-password">Forgot Password? <span>Click here</span></div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
};
export default LogSin;
