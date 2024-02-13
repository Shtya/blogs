import React from 'react'
import Logo from "../assets/Logo1.webp"
const Footer = () => {
  return (
    <footer id='footer'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,32L60,58.7C120,85,240,139,360,133.3C480,128,600,64,720,53.3C840,43,960,85,1080,101.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
    <div className='container'>
      <ul>
        <li> Useful links </li>
        <li> Home </li>
        <li> blogs </li>
        <li> about us </li>
        <li> contact us </li>
      </ul>
      <ul className='ul-1' >
          <li > Contact Info </li>
          <li className='email' ><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li ><i className="fa-solid fa-map-location-dot"></i>  Business Bay-Dubai</li>
          <li ><i className="fa-solid fa-phone"></i>  +971561384496 </li>
      </ul>
      <ul className='message'>
            <li>Subscription Form </li>
            <li>  Get updates right in your inbox. Join to get notified with all new stuff </li>
            <div className="group">
              <input type="text" placeholder="Email Address" />
              <i className="fa-solid fa-share"></i>
          </div>
      </ul>
    </div>
    </footer>
  )
}

export default Footer