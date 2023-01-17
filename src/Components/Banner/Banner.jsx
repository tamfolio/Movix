import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState, useEffect} from 'react'
import './Banner.css'
import requests from '../../request';
import axios from 'axios'
import {FaPlayCircle} from 'react-icons/fa'

function Banner() {
    const [movie,setMovie]= useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNowPlaying)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
                );
                return request;
        }
        fetchData();
    },[])

    console.log(movie)

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
  return (
    <header className='banner' 
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
    > 
    <div className="banner-contents">
            <h1 className='banner-title'>{movie.title}</h1>
            <div className="banner-ratings">
                <div className="imdb">
                    <img src="/assets/imdb.svg" alt="" />
                    <p>{movie.vote_average *10} / 100</p>
                </div>
                <div className="imdb">
                    <img src="/assets/apple.svg" alt="" />
                    <p>{movie.vote_average}</p>
                </div>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
            </h1>
            <button className="banner-button"><FaPlayCircle/>Watch Trailer</button>
        </div>
    </header>
  )
}

export default Banner
