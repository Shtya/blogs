import React, { useEffect, useState } from 'react'
import Nav2 from '../components/Nav2'
import Cover from "../assets/blogs/intro.jpg"
import axios from 'axios'
import Divider from '../components/Divider'
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
      var box = document.querySelector('.related');

      var content = document.querySelector('.blog-detail');
      var boxPosition = content.offsetTop;
      
      if (window.pageYOffset >= boxPosition) {
        box.classList.add('fixed');
      } else {
        box.classList.remove('fixed');
      }
    };
  } ,[])

  return (
    <div className='BlogDetails'>
      <Nav2 />
      <div className="intro">
        <div className="container">
        <div className="ImgCover"> <img src={Cover} alt="" /> </div>
        <div className="text">
          <div className="h2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>
          <div className="p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima laborum in voluptates sint consequatur dignissimos repellat fuga, et beatae unde, quo soluta aliquam iure, mollitia impedit vero! Exercitationem, ducimus! </div>
        </div>
        </div>
      </div>
      <Divider />

      
      <div className={`blog-detail`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />

          <div className="related" id='realted'>
            {
              related.slice(0 , 4).map((e,index)=>(
              <div className="box" id={`box box${index+1}`} >
                <img src={e.thumbnail} alt="" />
                <div className="text">
                  <div className="h2"> {e.title} </div>
                </div>
              </div>
              ))
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default BlogDetails