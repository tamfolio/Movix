import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
    const[show, setShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll',() => {
    //         if(window.scrollY > 100){
    //             setShow(true);
    //         } else setShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener('scroll');
    //     }
    // },[])
  return (
    <div className="nav">
        <img src="/assets/Logo.svg" alt="" />
        <div className="searchbar">
            <input type="text" placeholder='what do you want to watch?' />
        </div>
        <div className="nav-text">
            <h1>Hi,Tamilore</h1>
            <img src="/assets/Menu.svg" alt="" />
        </div>
    </div>
  )
}

export default Nav
