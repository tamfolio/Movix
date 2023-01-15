import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="registerpage">
      <div className="register-container">
        <div className="movix-logo">
          <img src="/assets/movix_logo.png" alt="" />
        </div>
        <h1 className="register-heading">Hi, Welcome</h1>
        <p className="register-text">
          Please sign-in to your account and start your experience
        </p>
        <div className="register-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
