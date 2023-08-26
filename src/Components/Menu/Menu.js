import React from 'react'
import { Link } from 'react-router-dom';
import menu1 from "../../images/menu-1.jpg";
import menu2 from "../../images/menu-2.jpg";
import menu3 from "../../images/menu-3.jpg";
import menu4 from "../../images/menu-4.jpg";
import menu5 from "../../images/menu-5.jpg";
import menu6 from "../../images/menu-6.jpg";
import menu7 from "../../images/menu-7.jpg";
import menu8 from "../../images/menu-8.jpg";
import menu9 from "../../images/menu-9.jpg";
import MenuCard from './MenuCard';
export const Menu = () => {
  return (
    <section className="menu mt-5 pt-5" id="menu" style={{ minHeight: "680px" }}>

          
 <Link to="/OurMenu" style={{ textDecoration: "none" }}>
      <h3 className="sub-heading"> our menu </h3>
     </Link>
    <h1 className="heading"> today's speciality </h1>

    <div className="box-container">
        <MenuCard img={menu1}/>
        <MenuCard img={menu2}/>
        <MenuCard img={menu3}/>
        <MenuCard img={menu4}/>
        <MenuCard img={menu5}/>
        <MenuCard img={menu6}/>
        <MenuCard img={menu7}/>
        <MenuCard img={menu8}/>
        <MenuCard img={menu9}/>
        <MenuCard img={menu3}/>
{/* 
        <div className="box">
            <div className="image">
                <img src={menu1} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu2} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu3} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu4} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu5} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu6} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu7} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu8} alt=""/>
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

        <div className="box">
            <div className="image">
                <img src={menu9} alt=""/>
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
        </div> */}

    </div>

</section>
  )
}
export default Menu;