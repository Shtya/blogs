import React, { useEffect } from 'react'
import Logo from "../assets/Logo.webp" ;

const Nav = () => {

  useEffect(_=>{
    window.addEventListener('resize', function() {
      let nav = document.querySelector("nav")
      let app = document.querySelector(".app")
      let x = document.querySelector(".menu")
      let cat = document.querySelector(".category")
      let i = document.querySelector(".cat i")
      if (window.innerWidth <= 850) {
        nav.style.left = "-300px"
        app.style.paddingLeft = "0" ;
        x.classList.add("fa-bars")
        x.classList.remove("fa-xmark")
        if(cat.classList.contains("active")) cat.classList.remove("active") 
      }else{
        nav.style.left = "0"
        app.style.paddingLeft = "300px" ;
        x.classList.remove("fa-bars")
        x.classList.add("fa-xmark")
        if(cat.classList.contains("active")) cat.classList.remove("active") 
      }
    });
  },[])


  const handleCate = ()=>{
    let cat = document.querySelector(".category")
    let i = document.querySelector(".cat i")
    cat.classList.toggle("active")
    i.classList.toggle("rotate")

  }

  const handleX = ()=>{
    let nav = document.querySelector("nav")
    let app = document.querySelector(".app")
    let x = document.querySelector(".menu")
    let cat = document.querySelector(".category")
    
    if(x.classList.contains("fa-xmark")){
      nav.style.left = "-300px"
      app.style.paddingLeft = "0" ;
      x.classList.add("fa-bars")
      x.classList.remove("fa-xmark")
      if(cat.classList.contains("active")) cat.classList.remove("active") 
    }else{
      nav.style.left = "0"
      app.style.paddingLeft = "300px" ;
      x.classList.remove("fa-bars")
      x.classList.add("fa-xmark")
      if(cat.classList.contains("active")) cat.classList.remove("active") 
    }
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
      <i className="fa-solid menu fa-xmark" onClick={handleX}></i>
      <i className="fa-solid fa-sliders"></i>
      </div>
      <ul>
        <li>home</li>
        <li>Work</li>
        <li className='cat' onClick={handleCate}> Category <i className="fa-solid fa-angle-up"></i> </li>
        <li>contact us</li>
        <li>about us</li>

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