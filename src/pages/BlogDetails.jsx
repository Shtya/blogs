import React, { useEffect, useState } from 'react'
import Nav2 from '../components/Nav2'
import Cover from "../assets/blogs/intro.jpg"
import axios from 'axios'
import Qoutes from '../components/Qoutes'

import { useNavigate } from 'react-router'
import user2 from "../assets/user2.png"
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
const BlogDetails = () => {
  const [data , setdata] = useState([])
  const [related , setrelated] = useState([])
  useEffect(_=>{
     axios.get("https://mrm-0-server.vercel.app/api/posts").then(e =>{
       setrelated(e.data.data)
       setdata(e.data.data[0]) 
      })
  } ,[])

  useEffect(() => {
    const handleScroll = () => {
      const box = document.getElementById('related');
      const content = document.querySelector('.blog-detail');

      if (window.scrollY >= content.offsetTop) {
        box.classList.add('fixed');
      } else {
        box.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = useNavigate()

  return (
    <div className='BlogDetails'>
      <Nav2 />

      <div className="intro">
        <div className="container">
        <div className="ImgCover"> <img src={Cover} alt="" /> </div>
        <div className="text">
          <div className="hash"> Digital News </div>
          <div className="h2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>
          <div className="p"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima laborum in voluptates sint consequatur dignissimos repellat fuga, et beatae unde, quo soluta aliquam iure, mollitia impedit vero! Exercitationem, ducimus! </div>
        </div>
        </div>
      </div>

      
      <div className="blog-detail">
        <div className="container">
          <div className="box">
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />

            <div className="reaction">
            {
              Array(3).fill(1).map((e,index)=>(
                <div className="comments">
              <img src={user2} alt="" />
              <div className="text">
                <div className="name"> Nathasya Putri</div>
                <div className="date">DECEMBER 23, 2019 AT 11:55 AM</div>
                <div className="p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut voluptates maxime ad tenetur quibusdam dolorum veritatis laboriosam. Rem, esse. </div>
              </div>
              <div className="replay">
              <i class="fa-solid fa-reply-all"></i> reply
              </div>
            </div>
              ))
            }

            <div className="addcomment">
            <img src={user2} alt="" />
              <div className="add">
              <input type="text" placeholder='Enter Comment' />
              <div className='bt'> Publish</div>
              </div>
            </div>
            </div>
          </div>

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
      <Footer bg={true} />

    </div>
  )
}

export default BlogDetails