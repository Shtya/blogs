import React, { useEffect } from 'react'
import Img1 from "../assets/portfolio/bg1.jpg"
import Img2 from "../assets/portfolio/bg2.jpg"
import Img3 from "../assets/portfolio/bg3.jpg"
import bird from "../assets/bird1.gif"
const Hero2 = () => {

    const data = [
        {img:Img1 , title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
        {img:Img2 , title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
        {img:Img3 , title:"HO VIET HOANG" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus officiis sapiente iste enim. Optio repudiandae numquam dolores blanditiis ex?"},
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
          
              document.querySelectorAll('.dots-page div').forEach(function(dot) {
                dot.classList.remove('active');
              });

              document.querySelectorAll('.effect').forEach(function(effect) {
                effect.classList.add('start');
              });
              beginPosition();
          
              setTimeout(function() {
                document.querySelectorAll('.effect').forEach(function(effect) {
                  effect.classList.remove('start');
                });
              }, 6000);
            }
          
            Load();
          
            document.getElementById('next').addEventListener('click', function() {
              active = active + 1 >= count_group ? 0 : active + 1;
              Load();
            });

            document.querySelectorAll('.button').forEach(function(button) {
              button.addEventListener('mouseover', function() {
                if (document.querySelector(".effect").classList.contains("start")) {
                  return;
                }
                document.querySelector('.birt').style.right = '31%';
                document.querySelector('.birt').style.bottom = '16%';
                document.querySelector('.birt').style.transform = 'rotateY(192deg) rotate(-97deg)';
              });
          
              button.addEventListener('mouseout', function() {
                beginPosition();
              });
            });
          
            function beginPosition() {
              document.querySelector('.birt').style.right = '50%';
              document.querySelector('.birt').style.bottom = '25%';
              document.querySelector('.birt').style.transform = 'rotateY(192deg) rotate(-40deg)';
            }
          
            document.querySelectorAll('.item').forEach(function(item) {
              item.addEventListener('mouseover', function(event) {
                var PosTop = event.pageY;
                var PosLeft = event.pageX;
                var height = item.offsetHeight;
                var width = item.offsetWidth;
                var defaultTop = 25;
                var defaultLeft = 50;
                var topNew = PosTop > (height / 2) + 30 ? defaultTop - 10 : defaultTop + 10;
                var leftNew = PosLeft > (width / 3) + 30 ? defaultLeft - 10 : defaultLeft + 10;
                document.querySelector('.birt').style.right = leftNew + '%';
                document.querySelector('.birt').style.bottom = topNew + '%';
              });
          
              item.addEventListener('mouseout', function() {
                beginPosition();
              });
            });
          
    } ,[])

    useEffect(() => {
        const interval = setInterval(() => {
          document.getElementById("next").click();
        }, 6000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='hero2'> 
        <div class="effect">
            <div class="birt">
               <img src={bird} alt="" />
            </div>
        </div>
        <div class="list">
            {
                data.map((e,idx)=>(
                    <div class="item" id={`item_${idx}`} key={idx}>
                        <img src={e.img} alt="" />
                    <div class="content">
                        <h2>{e.title}</h2>
                        <div class="content1"> {e.desc} </div>
                        <div class="button"> See More</div>
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