import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

import {auth} from '../../firebase'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="movix-logo">
          <img src="/assets/movix_logo.png" alt="" />
        </div>
        <h1 className="login-heading">Hi, Welcome</h1>
        <p className="login-text">Please sign-up to start your experience</p>
        <div className="login-form">
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>LOGIN</button>
        </div>
        <p className="alternative-text">
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
