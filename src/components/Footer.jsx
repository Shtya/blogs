import React from 'react'
import Logo from "../assets/Logo1.webp"
import wall from "../assets/wall.png"
import { useNavigate } from 'react-router'
const Footer = ({bg}) => {
  const nav = useNavigate()

  const handleContact = ()=>{
    let contact = document.querySelector(".contact-us")
    contact.classList.toggle("show")
  }

  const handleCate = ()=>{
    let cat = document.querySelector(".category")
    let i = document.querySelector(".cat i")
    cat.classList.toggle("active2")
    i.classList.toggle("rotate")

  }

  return (
    <footer id='footer'>
    <div class="mainContainer">
      <div class="wave top " style={bg == true ? {backgroundImage:`url(${wall})`} : {}} ></div>
    </div>
    <div className='container'>
      <ul>
        <li> Useful links </li>
        <li onClick={_=> nav("/")} > Home </li>
        <li onClick={handleCate}> category </li>
        <li onClick={_=> nav("/about-us")} > about us </li>
        <li onClick={handleContact } > contact us </li>
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