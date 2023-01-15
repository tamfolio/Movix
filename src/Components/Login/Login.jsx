import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="movix-logo">
          <img src="/assets/movix_logo.png" alt="" />
        </div>
        <h1 className="login-heading">Hi, Welcome</h1>
        <p className="login-text">
            Please sign-up to start your experience
        </p>
        <div className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>LOGIN</button>
        </div>
        <p className="alternative-text">Don’t have an account? <span>Register</span></p>
      </div>
    </div>
  )
}

export default Login
