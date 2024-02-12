import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay , Navigation , Scrollbar  , EffectCube  , EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';


import Img1 from "../assets/services/_ (1).webp" ;
import Img2 from "../assets/services/_ (2).webp" ;
import Img3 from "../assets/services/_ (3).webp" ;
import Img4 from "../assets/services/_ (4).webp" ;
import { useNavigate } from 'react-router';

const settings = {
    slidesPerView: 1 ,
    spaceBetween: 0 ,
    loop:true, 
    // speed: 2000 ,
    // autoplay:{delay: 4000 , "disableOnInteraction": false} ,
    effect : 'creative' ,
    creativeEffect : {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      } ,
    pagination: {clickable: true },
    modules: [ Pagination , Autoplay , Navigation , Scrollbar , EffectCube , EffectCreative],
    navigation:true,
  }

  const data = [
    {img:Img1 , title:"Areda Slide 1" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img2 , title:"Areda Slide 2" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img3 , title:"Areda Slide 3" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
    {img:Img4 , title:"Areda Slide 4" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat in? Similique cupiditate dolor sunt laborum consectetur nostrum a itaque?"},
  ]


const Qoutes = () => {
  const nav = useNavigate() ;
  return (
    <div className='Qoutes'>
        <Swiper  {...settings} className='swiper '   >
            {data.map((ele,idx)=>( 
                <SwiperSlide key={idx} className='box' >  
                    <div className="coverImg"> <img src={ele.img} alt="" /></div>
                    <div className="text">
                        <div className="h2"> {ele.title} </div>
                        <div className="p"> {ele.desc} </div>
                        <div className="details">
                            <div className="time"> <i className="fa-regular fa-clock"></i>  Feb 20, 2018 </div>
                            <div className="comments"> <i className="fa-regular fa-message"></i>  21 </div>
                        </div>

                        <div className="bt" onClick={_=> nav("/blog/1")}> View More </div>
                    </div>
                </SwiperSlide> ))}
        </Swiper>
    </div>
  )
}

export default Qoutes