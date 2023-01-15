import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <header className='banner' 
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url('/assets/Poster.png')`,
            backgroundPosition: "center center"
        }}
    > 
    </header>
  )
}

export default Banner
