import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skelton from '../components/Skelton'
import Hero from '../components/Hero'
import Nav2 from '../components/Nav2'
import Qoutes from '../components/Qoutes'
import { useNavigate } from 'react-router'


const Home = () => {
  const nav = useNavigate() ;
  const [blog , setblog] = useState([])
  const [next , setnext] = useState({from:0 ,to:8})
  const handleClick = ()=>{
    setnext({from: next.to , to:next.to + 8 })
  }
  useEffect(_=>{
    axios.get("https://mrm-0-server.vercel.app/api/posts").then(e => setblog(e.data.data) )
  } ,[next])


  return (
    <div className='home'>
      {/* <Nav2 /> */}
      <Hero />
      <Qoutes />
      <div className="boxes-blogs">
        <div className="options">
        <div className="container1">
        <select className='select1'>
          <option selected value="0">Select</option>
          <option value="1">Tips</option>
          <option value="2">Digital News</option>
          <option value="3"> Trands</option>
        </select>
        <div className="group">
          <input type="text" placeholder='search' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <select className='select2'>
          <option value="1">Expand Posts</option>
          <option value="2"> Shrink Posts</option>
        </select>
        </div>
        </div>
        <div className="container">
          {
            blog.length >= 1 ?  
            blog.slice(next.from , next.to)?.map((e,idx)=>(
              <div className={`box box-${idx+1}`} onClick={_=> nav("/blog/1")} >
                <img src={e.thumbnail} alt="" />
                <div className="text">

                <div className="h2"> {e.title} </div>
                <div className="p" dangerouslySetInnerHTML={{ __html: e?.description }} />
                <div className="details">
                  <div className="time"> <i className="fa-regular fa-clock"></i>  {e.createdAt.split("T")[0]} </div>
                  <div className="comments"> <i className="fa-regular fa-message"></i>  21 </div>
                </div>

                </div>
              </div>
            ))
            : Array(9).fill(1).map(e=> ( <Skelton /> ))
          }
        </div>
        <div className="pagination">
            <div onClick={_=> setnext({form:0 , to:8})} className={`${next.from == 0 ? "active" : ""}`}> 1 </div>
            <div onClick={_=> setnext({form:8 , to:16})} className={`${next.from == 8 ? "active" : ""}`}> 2 </div>
            <div onClick={_=> setnext({form:16 , to:24})} className={`${next.from == 16 ? "active" : ""}`}> 3 </div>
            <div className="arrow" onClick={_=> handleClick} ><i class="fa-solid fa-angles-right"></i> </div>

        </div>
      </div>
    </div>
  )
}

export default Home