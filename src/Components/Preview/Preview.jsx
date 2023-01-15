import React from 'react'
import './Preview.css'

function Preview({heading,img,name}) {
  return (
    <div className='Preview'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="preview-container">
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="preview-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Preview
