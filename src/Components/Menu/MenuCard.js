import React from 'react'

 const MenuCard = ( {img }) => {
  return (
    <div className="box">
    <div className="image">
        <img src={img} alt=""/>
        <a href="#" className="fas fa-heart"></a>
    </div>
    <div className="content">
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <h3>delicious food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
        <a href="#" className="btn">add to cart</a>
        <span className="price">$12.99</span>
    </div>
</div>
  )
}

export default MenuCard;
