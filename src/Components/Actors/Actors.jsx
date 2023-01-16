import React from 'react'
import './Actors.css'

function Actors({heading, img,name, fetchUrl}) {
  return (
    <div className='Actors'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="Actor-Container">
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
        <div className="Actor-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Actors
