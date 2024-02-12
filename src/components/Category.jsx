import React from 'react'
import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import Img4 from "../assets/portfolio/img4.jpg"

const data = [
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img2 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img1 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img2 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img3 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
    {img:Img4 , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur?"},
  ]

const Category = () => {
  return (
    <div className='category'>
      <div className="container">
              {
                data.map((e,idx)=>(
                  <div className="box" key={idx}> 
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