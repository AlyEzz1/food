import React from 'react'
import { Row } from 'react-bootstrap';
import MenuCard from '../Menu/MenuCard'
import menu1 from "../../images/menu-1.jpg";
import menu2 from "../../images/menu-2.jpg";
import menu3 from "../../images/menu-3.jpg";
import menu4 from "../../images/menu-4.jpg";
import menu5 from "../../images/menu-5.jpg";
import menu6 from "../../images/menu-6.jpg";
import menu7 from "../../images/menu-7.jpg";
import menu8 from "../../images/menu-8.jpg";
import menu9 from "../../images/menu-9.jpg";
import Pagination from '../Uitily/Pagination'
const UserFavoriteProduct = () => {
    return (
      <Row className='justify-content-start'>
      <div className="menu  ">
        <h1 className="heading mt-5 pt-5">My Favorite </h1>

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
          
           
            </div>

           
            </div>
            <Pagination />
            </Row>
 
    )
}

export default UserFavoriteProduct



