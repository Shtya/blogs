import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation , Scrollbar  , EffectCube  , EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';


import Img1 from "../assets/portfolio/img1.jpg" ;
import Img2 from "../assets/portfolio/img2.jpg" ;
import Img3 from "../assets/portfolio/img3.jpg" ;
import Img4 from "../assets/portfolio/img4.jpg" ;
import { useNavigate } from 'react-router';

const settings = {
    slidesPerView: 1 ,
    spaceBetween: 0 ,
    loop:true, 
    speed: 2000 ,
    autoplay:{delay: 4000 , "disableOnInteraction": false} ,
    effect : 'creative' ,
    creativeEffect : {
        prev: {
          shadow: true,
          translate: [0, 0, -10],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      } ,
    pagination: {clickable: true },
    modules: [ Autoplay , Navigation , Scrollbar , EffectCube , EffectCreative],
    navigation:false,
  }

  const data = [
    {img:Img1 , title:"Areda Slide 1" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img2 , title:"Areda Slide 2" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img3 , title:"Areda Slide 3" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img4 , title:"Areda Slide 4" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  ]


const Hero = () => {
  const nav = useNavigate() ;
  
  return (
    <div className='hero'>
        <Swiper  {...settings} className='swiper'   >
            {data.map((ele,idx)=>( 
                <SwiperSlide key={idx} className='box' >  
                    <div className="coverImg"> <img src={ele.img} alt="" /></div>
                    <div className="text">
                        <div className="h2"> {ele.title} </div>
                        <div className="p"> {ele.desc} </div>
                        <div className="bt" onClick={_=> nav("/blog/1")}> View More </div>
                    </div>
                </SwiperSlide> ))}
        </Swiper>
    </div>
  )
}

export default Hero