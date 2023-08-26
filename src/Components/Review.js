import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay } from "swiper";
import pic1 from "../images/pic-1.png";
import pic2 from "../images/pic-2.png";
import pic3 from "../images/pic-3.png";
import pic4 from "../images/pic-4.png";



export const Review = () => {
  return (
<section className="review" id="review">
<h3 className="sub-heading"> customer's review </h3>
    <h1 className="heading"> what they say </h1>

<div className="swiper-container review-slider">

    <Swiper
               spaceBetween={30}
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
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={pic1} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic2} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic3} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic4} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={pic1} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic2} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic3} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="swiper-wrapper">
               <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                <img src={pic4} alt=""/>
                    <div className="user-info">
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            </div>
               </SwiperSlide>
               </Swiper>
               </div>         

</section>
  )
}

export default Review;

