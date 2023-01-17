import React,{useState} from "react";
import "./Register.css";
import { getAuth,createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";

import {auth} from '../../firebase'
import {useDispatch} from 'react-redux'
import { RegisterSucess } from "../../redux/authSlice";
import {Link} from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName,setDisplayName] = useState("");
  const dispatch = useDispatch();

  const updateUserProfile = (displayName, userCredential) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName: displayName
    }).then(() => {
    dispatch(RegisterSucess(userCredential.user))
    }).catch((error) => {
    // An error occurred
    // ...
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password, displayName)
    .then((userCredential) => {
      updateUserProfile(displayName, userCredential);
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
          <input type="text" placeholder="Full Name"  value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>REGISTER</button>
        </div>
        <p className="alternative-text">Already have an account? <Link to='/login'><span>Login</span></Link></p>
      </div>
    </div>
  );
}

export default Register;
