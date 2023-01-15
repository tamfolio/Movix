import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <div className="banner-contents">
            <h1 className='banner-title'>John Wick 3 : Parabellum</h1>
            <div className="banner-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
            </div>
            <h1 className="banner_description">
            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </h1>
            <button className="banner-button"><FontAwesomeIcon icon="fa-solid fa-play" />Watch Trailer</button>
        </div>
    </header>
  )
}

export default Banner
