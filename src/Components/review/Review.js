import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay} from "swiper";
import { Link } from 'react-router-dom';
import pic1 from "../../images/pic-1.png";
import pic2 from "../../images/pic-2.png";
import pic3 from "../../images/pic-3.png";
import pic4 from "../../images/pic-4.png";
import CardReview from './CardReview';



export const Review = () => {
  return (
<section className="review mt-5 pt-5" id="review" style={{ minHeight: "680px" }}>

<Link to="/review" style={{ textDecoration: "none" }}>
<h3 className="sub-heading"> customer's review </h3>
     </Link>

    <h1 className="heading"> what they say </h1>

<div className="swiper-container review-slider">

    <Swiper 


               spaceBetween={20}
               grabCursor ={true}
               centeredSlides={true}
           
                autoplay={{
              delay:7500,
              disableOnInteraction: false,
               }}
               slidesPerView={3}
            //    grid={{
            //      rows: 1,
            //    }}
             
             
              modules={[Autoplay]}
                 classNameName="mySwiper"
              >

               <SwiperSlide>
               <CardReview img={pic1}/>
               </SwiperSlide>
               <SwiperSlide>
               <CardReview img={pic2}/>
               </SwiperSlide>
               <SwiperSlide>
               <CardReview img={pic3}/>
               </SwiperSlide>
               <SwiperSlide>
               <CardReview img={pic4}/>
               </SwiperSlide>
              
               </Swiper>
               </div>         

</section>
  )
}

export default Review;

