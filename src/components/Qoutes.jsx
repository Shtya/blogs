import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay , Navigation , Scrollbar , EffectFlip  , EffectFade   , EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import { useNavigate } from 'react-router';

const settings = {
    slidesPerView: 1 ,
    spaceBetween: 15 ,
    loop:true, 
    speed: 2000 ,
    autoplay:{delay: 4000 , "disableOnInteraction": false} ,
    pagination: {clickable: true },
    modules: [ Pagination , Autoplay , Navigation , Scrollbar  , EffectFade , EffectCreative],
    navigation:true,
    breakpoints: {

      500: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
    }
  }


const Qoutes = ({data , classn}) => {
  const nav = useNavigate() ;
  return (
    <div className={`Qoutes ${classn}`}>
        <Swiper  {...settings} className='swiper container '   >
            {data.slice(0 , 6).map((ele,idx)=>( 
                <SwiperSlide key={idx} className='box' >  
                    <div className="coverImg"> <img src={ele.thumbnail} alt="" /></div>
                    <div className="text">
                        <div className="h2"> {ele.title} </div>
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