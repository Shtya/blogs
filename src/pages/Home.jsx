import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skelton from '../components/Skelton'
import Hero from '../components/Hero'
import Nav2 from '../components/Nav2'


const Home = () => {
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
      <div className="boxes-blogs">
        <div className="container">
          {
            blog.length >= 1 ?  
            blog.slice(next.from , next.to)?.map((e,idx)=>(
              <div className={`box box-${idx+1}`} >
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