import React from 'react'
import Nav2 from '../components/Nav2'
import bg1 from "../assets/portfolio/bg1.jpg"
import bg2 from "../assets/portfolio/bg2.jpg"
import bg3 from "../assets/portfolio/bg3.jpg"
import bg4 from "../assets/portfolio/bg4.jpg"


const data  = [
  {img:bg1 , title:"consectetur adipisicing elit." , desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, libero dolore et unde rem laborum maxime aliquid. Ipsam, vel laboriosam optio natus dolorum libero doloribus tenetur asperiores modi pariatur.'},
  {img:bg3 , title:"consectetur adipisicing elit." , desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, libero dolore et unde rem laborum maxime aliquid. Ipsam, vel laboriosam optio natus dolorum libero doloribus tenetur asperiores modi pariatur.'},
  {img:bg1 , title:"consectetur adipisicing elit." , desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, libero dolore et unde rem laborum maxime aliquid. Ipsam, vel laboriosam optio natus dolorum libero doloribus tenetur asperiores modi pariatur.'},
  {img:bg3 , title:"consectetur adipisicing elit." , desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque, libero dolore et unde rem laborum maxime aliquid. Ipsam, vel laboriosam optio natus dolorum libero doloribus tenetur asperiores modi pariatur.'},
]


const About_us = () => {
  return (
    <div className='about-us'>
      
        <Nav2 />
        <div className="intro">
           <div className="ImgCover"> <img src={bg1} alt="" /> </div>
          <div className="text">
            <div className="h2"> Lorem ipsum, dolor sit amet  elit. Sunt tenetur  </div>
            <blockquote className="p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae, delectus saepe, optio sint tempora deleniti error dolorem ullam et laudantium, molestias ipsam consequuntur! Id voluptatum sit esse laudantium eaque. </blockquote>
          </div>
        </div>

        <div className="mission">
          <div className="h1"> our Goals </div>
          <div className="container">
            {
              data.map((e,index)=>(
                <div className="box" key={index} style={{background:`url(${e.img})`}}>
                    <div className="h2"> {e.title} </div>
                    <div className="p"> {e.desc} </div>
                </div>
              ))
            }
          </div>
        </div>


    </div>
  )
}

export default About_us