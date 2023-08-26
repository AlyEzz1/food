import React from 'react'
import dish1 from "../images/dish-1.png";
import dish2 from "../images/dish-2.png";
import dish3 from "../images/dish-3.png";
import dish4 from "../images/dish-4.png";
import dish5 from "../images/dish-5.png";
import dish6 from "../images/dish-6.png";
export const Ourdishes = () => {
  return (
    
// <!-- dishes section starts  -->

<section className="dishes" id="dishes">

    <h3 className="sub-heading"> our dishes </h3>
    <h1 className="heading"> popular dishes </h1>

    <div className="box-container">

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish1} alt=""/>
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

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish2} alt=""/>
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

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish3} alt=""/>
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

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish4} alt=""/>
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

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish5} alt=""/>
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

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={dish6} alt=""/>
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

    </div>

</section>
  )
}

export default Ourdishes;
