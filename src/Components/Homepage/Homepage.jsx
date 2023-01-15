import React from 'react'
import './Homepage.css'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import Movies from '../Movies/Movies'
import Actors from '../Actors/Actors'

function Homepage() {
  return (
    <div className='homepage'>
      <Nav/>
      <Banner/>
      <Movies heading='Featured Movies' img="/assets/movie.png" releaseDate='USA, 2016 - Current' title='Stranger Things'/>
      <Movies heading='New Arrival' img="/assets/movie2.png" releaseDate='USA, 2021' title='Dune'/>
      <Actors heading='Featured Casts' img='/assets/actor.png' name='Keanu Reeves'/>
    </div>
  )
}

export default Homepage
