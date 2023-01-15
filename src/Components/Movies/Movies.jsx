import React from 'react'
import './movies.css'

function Movies({heading, img,releaseDate, title}) {
  return (
    <div className='Movie-container'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See all &gt;</p>
      </div>
      <div className="Movie-details">
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
        <div className="movie-box">
            <img src={img} alt="" />
            <div className="movie-desc">
                <h3 className="release-date">{releaseDate}</h3>
                <h2 className="movie-title">{title}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>86.0 / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>97%</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Movies
