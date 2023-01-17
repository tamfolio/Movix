import React,{useState, useEffect} from 'react'
import { auth } from '../../firebase'
import './Homepage.css'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import Movies from '../Movies/Movies'
import Actors from '../Actors/Actors'
import Preview from '../Preview/Preview'
import requests from '../../request'
import Footer from '../Footer/Footer'

function Homepage() {
  return (
    <div className='homepage'>
      <Nav/>
      <Banner/>
      <Movies heading='Featured Movies' img="/assets/movie.png" releaseDate='USA, 2016 - Current' title='Stranger Things' fetchUrl={requests.featuredMovies}/>
      <Movies heading='New Arrival' img="/assets/movie2.png" releaseDate='USA, 2021' title='Dune' fetchUrl={requests.fetchNowPlaying}/>
      <Preview heading='Exclusive Videos' img='/assets/preview.png' name='Lamb (2021) Trailer'/>
      <Actors heading='Featured Casts' img='/assets/actor.png' name='Keanu Reeves' fetchUrl={requests.featuredActors}/>
      <Footer/>
    </div>
  )
}

export default Homepage
