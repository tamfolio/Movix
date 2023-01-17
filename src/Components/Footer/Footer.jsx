import React from 'react'
import './Footer.css'
import {FaFacebookSquare,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="social-icons">
        <FaFacebookSquare className='social-icon'/>
        <FaInstagram className='social-icon'/>
        <FaTwitter className='social-icon'/>
        <FaYoutube className='social-icon'/>
      </div>
      <div className="links">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className='copyright'>&copy; 2021 Movix</p>
    </div>
  )
}

export default Footer
