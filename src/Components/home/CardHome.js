import React from 'react'

export const CardHome = ({img}) => {
  return (
    <div className="swiper-wrapper wrapper">

    <div className="swiper-slide slide">
   <div className="content">
   <span>our special dish</span>
   <h3>spicy noodles</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
     <a href="#" className="btn">order now</a>
    </div>
    <div className="image">
    <img src={img} alt=""/>
      </div>
     </div>
     </div> 
  )
}

export default CardHome;
