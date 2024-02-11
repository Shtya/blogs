import React from 'react'
import Logo from "../assets/Logo1.webp"
const Footer = () => {
  return (
    <footer>
    <div className='container'>
      {/* <div className="logo"><img src={Logo} alt="" /> </div> */}
      <ul>
        <li> Useful links </li>
        <li> Home </li>
        <li> blogs </li>
        <li> about us </li>
        <li> contact us </li>
      </ul>
      <ul className='ul-1' >
          <li > Contact Info </li>
          <li ><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li ><i className="fa-solid fa-map-location-dot"></i>  Business Bay-Dubai</li>
          <li ><i className="fa-solid fa-phone"></i>  +971561384496 </li>
      </ul>
      <ul>
      <div className="group">
            <li>Subscription Form </li>
            <li> <i class="fa-solid mess fa-message"></i> Get updates right in your inbox. Join to get notified with all new stuff </li>
            <input type="text" placeholder="Email Address" />
            <i className="fa-solid fa-share"></i>
          </div>
      </ul>
    </div>
    </footer>
  )
}

export default Footer