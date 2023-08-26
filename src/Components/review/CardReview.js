import React from 'react'

export const CardReview = ({img}) => {
  return (
    <div className="swiper-wrapper">
    <div className="swiper-slide slide">
     <i className="fas fa-quote-right"></i>
     <div className="user">
     <img src={img} alt=""/>
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
  )
}

export default CardReview;
