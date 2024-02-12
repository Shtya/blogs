import React from 'react'
import Logo from "../assets/Logo1.webp"


const Nav2 = () => {
  return (
    <div className='Nav2'>
        <div className="logo">
        <i className="fa-solid fa-bars"></i>
        <img src={Logo} alt="" />
        </div>
        
        <div className="container">
        <div className="social">
        <i className="fa-brands fa-facebook-f"></i> 
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-whatsapp"></i>   
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
      </div>
    </div>
  )
}

export default Nav2