import React from 'react'
import { Link } from 'react-router-dom';
import dish1 from "../../images/dish-1.png";
import dish2 from "../../images/dish-2.png";
import dish3 from "../../images/dish-3.png";
import dish4 from "../../images/dish-4.png";
import dish5 from "../../images/dish-5.png";
import dish6 from "../../images/dish-6.png";
import CardOurdishes from './CardOurdishes';
export const Ourdishes = () => {
  return (
    
// <!-- dishes section starts  -->

<section className="dishes mt-5 pt-5" id="dishes" style={{ minHeight: "680px" }}>

    <h3 className="sub-heading"> our dishes </h3>
   <Link to="/Ourdishes" style={{ textDecoration: "none" }}>
    <h1 className="heading"> popular dishes </h1>
     </Link>
    <div className="box-container">

     <CardOurdishes img={dish1} />
     <CardOurdishes img={dish2} />
     <CardOurdishes img={dish3} />
     <CardOurdishes img={dish4} />
     <CardOurdishes img={dish5} />
     <CardOurdishes img={dish6} />

    </div>

</section>
  )
}

export default Ourdishes;
