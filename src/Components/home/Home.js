import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import home1 from "../../images/home-img-1.png";
import home2 from "../../images/home-img-2.png";
import home3 from "../../images/home-img-3.png";
import CardHome from './CardHome';

export const Home = () => {

  return (

   
 
    <section className="home" id="home" style={{ minHeight: "680px" }}>
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
           <CardHome img={home1}/>
                </SwiperSlide>
                <SwiperSlide>
                <CardHome img={home2}/>
               </SwiperSlide>

                <SwiperSlide>
                <CardHome img={home3}/>
                </SwiperSlide>
               </Swiper>
               </div>
              </section>

  )
}

export default Home;




