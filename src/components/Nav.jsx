import React, { useEffect } from 'react'
import Logo from "../assets/Logo.webp" ;
import { useNavigate } from 'react-router';

const Nav = () => {
  const nav1 = useNavigate()

  const handleX = ()=>{
    let nav = document.querySelector("nav")
    let x = document.querySelector(".menu")
    let cat = document.querySelector(".category")
    let contact = document.querySelector(".contact-us")
    
    if(x.classList.contains("fa-xmark")){
      nav.style.left = "-300px"
      x.classList.add("fa-bars")
      x.classList.remove("fa-xmark")
      if(cat.classList.contains("active")) cat.classList.remove("active") 
      contact.classList.remove("show")
    }else{
      nav.style.left = "0"
      x.classList.remove("fa-bars")
      x.classList.add("fa-xmark")
      if(cat.classList.contains("active")) cat.classList.remove("active") 
    }
  }

  const handleContact = ()=>{
    let contact = document.querySelector(".contact-us")
    contact.classList.toggle("show")
  }
  const ShowSettings = ()=>{
    let set = document.querySelector(".configration")
    set.classList.toggle("active")
  }
  const handleCate = ()=>{
    let cat = document.querySelector(".category")
    let i = document.querySelector(".cat i")
    cat.classList.toggle("active")
    i.classList.toggle("rotate")

  }

  const nav = (path)=>{
    nav1(path)
    handleX() ;
  }


  return (
    <nav>
      <div className="logo"> 
          <div className="img">
          <img src={Logo} alt="" />
          <div className="text"> <p>mrm </p> <span>advertising</span></div>
          </div> 
      </div>
      <div className="settings">
      <i className="fa-solid menu fa-bars" onClick={handleX}></i>
      <i className="fa-solid fa-sliders" onClick={ShowSettings}></i>
      </div>
      <ul>
        <li onClick={_=> nav("/")}>home</li>
        <li onClick={_=> nav("/work")} >Work</li>
        <li className='cat' onClick={handleCate}> Category <i className="fa-solid fa-angle-up"></i> </li>
        <li onClick={_=> nav("/contact-us")}>contact us</li>
        <li onClick={_=> nav("/about-us")}>about us</li>

      </ul>
      <div className="social">
        <i className="fa-brands fa-facebook-f"></i> 
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-whatsapp"></i>   
        <i className="fa-brands fa-linkedin-in"></i>
      </div>

    </nav>
  )
}

export default Nav