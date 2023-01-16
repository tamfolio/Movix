import React,{useState, useEffect} from 'react'
import './movies.css'
import axios from 'axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Movies({heading, img,releaseDate, title, fetchUrl}) {
    const[movies,setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(movies);
  return (
    <div className='Movie-container'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="Movie-details">
        {movies.map((movie) => (
            <div className="movie-box">
            <img src={`${base_url}${movie.poster_path}`} alt="" className='movie-box-img'/>
            <div className="movie-desc">
                <h3 className="release-date">{movie.release_date || movie.first_air_date}</h3>
                <h2 className="movie-title">{movie.title || movie.name}</h2>
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
        ))}
      </div>
    </div>
  )
}

export default Movies
