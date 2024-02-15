import React, { useEffect } from 'react'
import bg1 from "../assets/portfolio/bg1.jpg"
import bg2 from "../assets/portfolio/bg2.jpg"
import bg3 from "../assets/portfolio/bg3.jpg"

import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import bird from "../assets/bird1.gif"
const Hero2 = () => {

    const data = [
        {img:bg1 , cover:Img1, title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
        {img:bg2 , cover:Img2, title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
        {img:bg3 , cover:Img3, title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
    ]

    useEffect(_=>{
            var count_group = document.querySelectorAll(".list .item").length;
            var active = 0;
            var begin = true;
          
            function Load() {
              if (begin) {
                begin = false;
              } else {
                var prevIndex = active - 1 < 0 ? count_group - 1 : active - 1;
                document.getElementById('item_' + prevIndex).classList.remove('active');
                document.getElementById('item_' + prevIndex).classList.add('hide');
              }
          
              document.getElementById('item_' + active).classList.remove('hide');
              document.getElementById('item_' + active).classList.add('active');

            }
          
            Load();
          
            document.getElementById('next').addEventListener('click', function() {
              active = active + 1 >= count_group ? 0 : active + 1;
              document.querySelector(".birt img").style.animation = "showcontent 0.7s ease-in-out  1 forwards"
              Load();
            });


          
    } ,[])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       document.getElementById("next").click();
    //     }, 6000);
    
    //     return () => clearInterval(interval);
    //   }, []);

  return (
    <div className='hero2'> 
        <div class="effect">
            <div class="birt">
               <img src={Img1} alt="" />
            </div>
        </div>
        <div class="list">
            {
                data.map((e,idx)=>(
                    <div class="item" id={`item_${idx}`} key={idx}>
                        <img className='img' src={e.img} alt="" />
                        <div className="content">
                          <div className="hash button"> Digital News </div>
                          <h2> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                          <div className="content1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima laborum in voluptates sint consequatur dignissimos repellat fuga, et beatae unde, quo soluta aliquam iure, mollitia impedit vero! Exercitationem, ducimus! </div>
                        </div>
                    </div>
                ))
            }

        </div>
    <button id="next"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  )
}

export default Hero2