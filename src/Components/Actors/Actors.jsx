import React,{useState, useEffect} from 'react'
import './Actors.css'
import axios from 'axios'

const base_url = 'https://image.tmdb.org/t/p/original/';

function Actors({heading, img,name, fetchUrl}) {
  const[actors,setActors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setActors(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(actors);
  return (
    <div className='Actors'>
      <div className="top">
        <h1>{heading}</h1>
        <p>See more &gt;</p>
      </div>
      <div className="Actor-Container">
        {actors.map((actor) => (
          <div className="Actor-card">
          <img src={`${base_url}${actor.profile_path}`} alt="" className='movie-box-img'/>
          <p className="name">{actor.name}</p>
      </div>
        ))}
      </div>
    </div>
  )
}

export default Actors
