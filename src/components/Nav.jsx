import React, { useEffect } from 'react'
import Logo from "../assets/Logo.webp" ;
import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import Img4 from "../assets/portfolio/img4.jpg"

const Nav = () => {
  useEffect(_=>{
    let nav = document.querySelector("nav")
    let app = document.querySelector(".app")
    let x = document.querySelector(".menu")
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 850) {
        nav.style.left = "-300px"
        app.style.paddingLeft = "0" ;
        x.classList.add("fa-bars")
        x.classList.remove("fa-xmark")
      }else{
        nav.style.left = "0"
        app.style.paddingLeft = "310px" ;
        x.classList.remove("fa-bars")
        x.classList.add("fa-xmark")
      }
    });
  },[])

  const handleX = ()=>{
    let nav = document.querySelector("nav")
    let app = document.querySelector(".app")
    let x = document.querySelector(".menu")
    
    if(x.classList.contains("fa-xmark")){
      nav.style.left = "-300px"
      app.style.paddingLeft = "0" ;
      x.classList.add("fa-bars")
      x.classList.remove("fa-xmark")
    }else{
      nav.style.left = "0"
      app.style.paddingLeft = "310px" ;
      x.classList.remove("fa-bars")
      x.classList.add("fa-xmark")
    }
  }

  const data = [
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
  ]
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
        <li className='cat'> Category <i className="fa-solid fa-angle-up"></i> </li>
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
{/* 
      <div className="boxes">
              {
                data.map((e,idx)=>(
                  <div className="box" key={idx}> 
                    <img src={e.img} alt="" />
                    <div className="text">
                      <div className="h2"> Lorem, ipsum dolor.</div>
                      <div className="p"></div>
                    </div>
                  </div>
                ))
              }
              
            </div> */}
    </nav>
  )
}

export default Nav