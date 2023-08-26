import React from 'react'

import AdminAllProductsCard from './AdminAllProductsCard'
import dish1 from "../../images/dish-1.png";
import dish2 from "../../images/dish-2.png";
import dish3 from "../../images/dish-3.png";
import dish4 from "../../images/dish-4.png";
import dish5 from "../../images/dish-5.png";
import dish6 from "../../images/dish-6.png";

const AdminAllOrders = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <section className="dishes admin-icon mt-5 pt-5" id="dishes" style={{ minHeight: "680px" }}>

<h3 className="sub-heading"> our dishes </h3>

<div className="box-container">

<AdminAllProductsCard img={dish1}/>
<AdminAllProductsCard img={dish2}/>
<AdminAllProductsCard img={dish3}/>
<AdminAllProductsCard img={dish4}/>
<AdminAllProductsCard img={dish5}/>
<AdminAllProductsCard img={dish6}/>

</div>

</section>
        </div>
    )
}

export default AdminAllOrders
