import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="footerItems">
            <a href='/'>home</a>
            <a href='/privacy'>privacy</a>
            <a href='/terms'>terms</a>
            <a href='/contact'>contact</a>
        </div>
        <div className="madeWithLove">
            <h1>made with love by <a href="http://linkedin.com/in/carla-hau/">carla hau</a></h1>
        </div>
        <div className="copyright">
            <p>© 2025 Bean & Do by Carla Hau. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer