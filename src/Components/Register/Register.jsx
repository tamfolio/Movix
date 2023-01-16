import React,{useState} from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {auth} from '../../firebase'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password, name)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error)
    })
  }
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
          <input type="text" placeholder="Full Name"  value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>REGISTER</button>
        </div>
        <p className="alternative-text">Already have an account? <span>Login</span></p>
      </div>
    </div>
  );
}

export default Register;
