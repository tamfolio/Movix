import React,{useState,useEffect} from 'react'
import './Preview.css'
import axios from 'axios';
import {AiOutlinePlayCircle} from 'react-icons/ai'


const base_url = 'https://image.tmdb.org/t/p/original/';
function Preview({heading,img,name, fetchUrl}) {
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
    <div className='Preview'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="preview-container">
        {movies.map((movie) => (
            <div className="preview-card" key={movie.id}>
            <img src={`${base_url}${movie.backdrop_path}`} className='trailer-img' />
                <p className="name">{movie.title || movie.name} Trailer</p>
                <AiOutlinePlayCircle className='trailer-icon'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Preview
