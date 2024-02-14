import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.webp"
import { useNavigate } from 'react-router'


const Nav2 = () => {
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

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 300 ? settop("show-up") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)
  } ,[ window])

  let prevScrollPos  = window.pageYOffset;
  let navbar   = document.getElementById('navbar');

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if(navbar){

      if (prevScrollPos > currentScrollPos)  navbar.style.top = '0'  
      else  navbar.style.top = `-${navbar.offsetHeight}px`  

    }
    prevScrollPos = currentScrollPos;
  }
  
    

  return (
    <div className="Nav2">
        
      <div className="container">
      <img onClick={_=> nav("/")} src={Logo} alt="" />
        <div className="social">
        <i className="fa-brands fa-facebook-f"></i> 
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-whatsapp"></i>   
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      <div className={`container1 ${top}`} id='navbar'>
        <img onClick={_=> nav("/")}  src={Logo} alt="" />
        <ul>
          <li onClick={_=> nav("/")} >home</li>
          <li onClick={_=> nav("/work")} >Work</li>
          <li onClick={handleCate} className='cat' > Category <ion-icon name="chevron-up-outline"></ion-icon> </li>
          <li onClick={handleContact} >contact us</li>
          <li onClick={_=> nav("/about-us")} >about us</li>
          <ion-icon name="search-outline"></ion-icon>
        </ul>
      </div>

      <div className="mainContainer"> <div class="wave top" /> </div>

    </div>
  )
}

export default Nav2