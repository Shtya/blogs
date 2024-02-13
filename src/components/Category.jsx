import React from 'react'
import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import Img4 from "../assets/portfolio/img4.jpg"
import { useNavigate } from 'react-router'

const data = [
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img2 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img2 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"21"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"21"},
  ]

const Category = () => {
  const nav = useNavigate("/") ;

  const handleCate = ()=>{
    let cat = document.querySelector(".category")
    let i = document.querySelector(".cat i")
    cat.classList.forEach(className => {
      if (className !== 'category') {
        cat.classList.remove(className);
      }})

    i.classList.toggle("rotate")

  }
  const Go = ()=>{
    nav("/category/3")
    let cat = document.querySelector(".category")
    cat.classList.forEach(className => {
      if (className !== 'category') {
        cat.classList.remove(className);
      }})
  }
  
  return (
    <div className='category'>
      <div className="container">
      <i onClick={handleCate} className="fa-solid fa-xmark"></i>

              {
                data.map((e,idx)=>(
                  <div className="box" key={idx} onClick={Go}> 
                    <img src={e.img} alt="" />
                    <div className="text">
                      <div className="h2">{e.title}</div>
                      <div className="p"> {e.desc} </div>
                    </div>
                  </div>
                ))
              }
              
            </div>
    </div>
  )
}

export default Category