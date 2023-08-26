import React from 'react'

export const CardOurdishes = ({img}) => {
  return (
    <div className="box">
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-eye"></a>
    <img src={img} alt=""/>
    <h3>tasty food</h3>
    <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
    </div>
    <span>$15.99</span>
    <a href="#" className="btn">add to cart</a>
</div>
  )
}
export default CardOurdishes;
