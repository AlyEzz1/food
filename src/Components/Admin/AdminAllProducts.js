import React from 'react'

import AdminAllProductsCard from './AdminAllProductsCard'


const AdminAllProducts = ({products}) => {


    return (
  // <!-- dishes section starts  -->

<section className="dishes admin-icon mt-5 pt-5" id="dishes" style={{ minHeight: "680px" }}>

<h3 className="sub-heading"> our dishes </h3>

<div className="box-container">

{
                    products ? (
                        products.map((item, index) => <AdminAllProductsCard key={index} item={item} />)
                    ) : <h4>لا يوجد منتجات حتي الان</h4>
                }

</div>

</section>
    )
}

export default AdminAllProducts



