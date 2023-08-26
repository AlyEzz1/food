import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import home1 from "../images/home-img-1.png";
import home2 from "../images/home-img-2.png";
import home3 from "../images/home-img-3.png";

export const Home = () => {

  return (
 
    <section className="home" id="home">
          <div className="swiper-container home-slider">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
              <SwiperSlide> 
               <div className="swiper-wrapper wrapper">

              <div className="swiper-slide slide">
             <div className="content">
             <span>our special dish</span>
             <h3>spicy noodles</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
               <a href="#" className="btn">order now</a>
              </div>
              <div className="image">
              <img src={home1} alt=""/>
                </div>
               </div>
               </div> 
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-wrapper wrapper">

              <div className="swiper-slide slide">
               <div className="content">
                <span>our special dish</span>
                 <h3>spicy noodles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                 <a href="#" className="btn">order now</a>
               </div>
             <div className="image">
             <img src={home2} alt=""/>
               </div>
              </div>
              </div>
               </SwiperSlide>

                <SwiperSlide><div className="swiper-wrapper wrapper">

                <div className="swiper-slide slide">
               <div className="content">
             <span>our special dish</span>
                <h3>spicy noodles</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
               <a href="#order" className="btn">order now</a>
                </div>
               <div className="image">
                 <img src={home3} alt=""/>
              </div>
              </div>
               </div>
                </SwiperSlide>
               </Swiper>
               </div>
              </section>

  )
}

export default Home;




