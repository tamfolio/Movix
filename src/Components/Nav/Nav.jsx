import React,{useState,useEffect} from 'react'
import './Nav.css'
import {auth} from '../../firebase'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/authSlice'
import { useHistory } from "react-router-dom";

function Nav() {
    const[show, setShow] = useState(false);
    const currentUser = useSelector(state => state.user.currentUser.displayName)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
      auth.signOut(auth).then(() => {
        dispatch(logout());
        history.push('/')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
      
    }
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                setShow(true);
            } 
            else setShow(false);
        });
    },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img src="/assets/Logo.svg" alt="" />
        <div className="searchbar">
            <input type="text" placeholder='what do you want to watch?' />
        </div>
        <div className="nav-text">
            {currentUser ? <h1>Hi, {currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}</h1>: <h1>Hi, User</h1>}
            <img src="/assets/Menu.svg" alt="" onClick={handleLogout}/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Nav
