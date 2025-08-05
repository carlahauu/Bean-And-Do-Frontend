import React from 'react'
import '../styles/Navbar.css'
import Lights from '../assets/Lights.svg'
import '../assets/Lights.png' 

function Navbar() {
  return (
    <div className='navBarContainer'>
        <div className="left">
            <h1>bean & do</h1>
            <p>developed by carla hau</p>
        </div>
        <div className="right">
            <img src={Lights} alt='Vector graphic of cafe-styled lights'></img>
        </div>
    </div>
  )
}

export default Navbar