import React from 'react'
import Home from '../Components/Home';
import Ourdishes from '../Components/Ourdishes';
import About from '../Components/About';
import Menu from '../Components/Menu';
import Review from '../Components/Review';
import { Order } from '../Components/Order';
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