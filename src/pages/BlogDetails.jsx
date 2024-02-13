import React, { useEffect, useState } from 'react'
import Nav2 from '../components/Nav2'
import Cover from "../assets/blogs/intro.jpg"
import axios from 'axios'
import Divider from '../components/Divider'
import Qoutes from '../components/Qoutes'

import Img1 from "../assets/services/_ (1).webp" ;
import Img2 from "../assets/services/_ (2).webp" ;
import Img3 from "../assets/services/_ (3).webp" ;
import Img4 from "../assets/services/_ (4).webp" ;
import { useNavigate } from 'react-router'
const Related = [
  {img:Img1 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  1" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  {img:Img2 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  2" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  {img:Img3 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  3" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  {img:Img4 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  4" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  {img:Img4 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  5" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  {img:Img4 , title:"Areda Slide Lorem ipsum dolor sit amet Areda Slide Lorem ipsum dolor sit amet  6" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
]
const BlogDetails = () => {
  const [data , setdata] = useState([])
  const [related , setrelated] = useState([])
  useEffect(_=>{
     axios.get("https://mrm-0-server.vercel.app/api/posts").then(e =>{
       setrelated(e.data.data)
       setdata(e.data.data[0]) 
      })
  } ,[])

  useEffect(_=>{
    window.onscroll = function() {
      var box = document.getElementById('related');
      var content = document.getElementById('blog-detail');
      var boxPosition = content.offsetTop;
      
      if (window.pageYOffset >= boxPosition ) {
        box.classList.add('fixed');
      } else {
        box.classList.remove('fixed');
      }
    };
  } ,[])
  const nav = useNavigate()

  return (
    <div className='BlogDetails'>
      <Nav2 />
      <div className="intro">
        <div className="container">
        <div className="ImgCover"> <img src={Cover} alt="" /> </div>
        <div className="text">
          <div className="hash"> #Digital_News </div>
          <div className="h2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>
          <div className="p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima laborum in voluptates sint consequatur dignissimos repellat fuga, et beatae unde, quo soluta aliquam iure, mollitia impedit vero! Exercitationem, ducimus! </div>
        </div>
        </div>
      </div>
      {/* <Divider /> */}

      
      <div className="blog-detail" id='blog-detail'>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />

          <div className="related" id='related'>
            {
              related.slice(0 , 4).map((ele,index)=>(
                <div key={index} className='box' >  
                <div className="coverImg"> <img src={ele.thumbnail} alt="" /></div>
                <div className="text">
                    <div className="h2"> {ele.title} </div>
                    <div className="details">
                        <div className="time"> <i className="fa-regular fa-clock"></i>  Feb 20, 2018 </div>
                        <div className="comments"> <i className="fa-regular fa-message"></i>  21 </div>
                    </div>

                    <div className="bt" onClick={_=> nav("/blog/1")}> View More </div>
                </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <Qoutes data={related} classn="custom" />

    </div>
  )
}

export default BlogDetails