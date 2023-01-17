import React,{useState, useEffect} from 'react'
import './movies.css'
import axios from 'axios';
import {FaHeart} from 'react-icons/fa'

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
  return (
    <div className='Movie-container'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="Movie-details">
        {movies.map((movie) => (
            <div className="movie-box" key={movie.id}>
            <img src={`${base_url}${movie.poster_path}`} alt="" className='movie-box-img'/>
            <div className="movie-desc">
                <h3 className="release-date">{new Date(movie.release_date).getFullYear() || new Date(movie.first_air_date).getFullYear()}</h3>
                <h2 className="movie-title">{movie.title || movie.name}</h2>
                <div className="movie-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>{(movie.vote_average * 10).toFixed(1)} / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>{movie.vote_count}</p>
                </div>
                </div>
                <h4 className="movie-category">Action, Adventure, Horror</h4>
            </div>
            <div className="hearts">
            <FaHeart className='heart-icon'/>
            </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Movies
