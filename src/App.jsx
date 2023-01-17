import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Homepage from './Components/Homepage/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(state => state.user.currentUser)
  console.log('user',user)
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/movies" /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/movies" /> : <Login />}
          </Route>
          <Route exact path="/movies">
            <Homepage />
          </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App
