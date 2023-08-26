import React from 'react'
import Home from '../../Components/home/Home';
import Ourdishes from '../../Components/Ourdishes/Ourdishes';
import About from '../../Components/About';
import Menu from '../../Components/Menu/Menu';
import Review from '../../Components/review/Review';
import { Order } from '../../Components/Order';
export const HomePage = () => {

  return (
    <div>
    <Home/>
   <Ourdishes/>
   <About/>
   <Menu/>
   <Review/>
   <Order/>
    </div>
  
  )
}

export default HomePage;