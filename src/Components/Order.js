import React from 'react'
import { Link } from 'react-router-dom'
export const Order = () => {
  return (
    
<section className="order mt-5 pt-5" id="order" style={{ minHeight: "680px" }}>

<Link to="/order" style={{ textDecoration: "none" }}>
<h3 className="sub-heading"> order now </h3>
     </Link>

<h1 className="heading"> free and fast </h1>

<form action="">

    <div className="inputBox">
        <div className="input">
            <span>your name</span>
            <input type="text" placeholder="enter your name"/>
        </div>
        <div className="input">
            <span>your number</span>
            <input type="number" placeholder="enter your number"/>
        </div>
    </div>
    <div className="inputBox">
        <div className="input">
            <span>your order</span>
            <input type="text" placeholder="enter food name"/>
        </div>
        <div className="input">
            <span>additional food</span>
            <input type="test" placeholder="extra with food"/>
        </div>
    </div>
    <div className="inputBox">
        <div className="input">
            <span>how musch</span>
            <input type="number" placeholder="how many orders"/>
        </div>
        <div className="input">
            <span>date and time</span>
            <input type="datetime-local"/>
        </div>
    </div>
    <div className="inputBox">
        <div className="input">
            <span>your address</span>
            <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="input">
            <span>your message</span>
            <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
        </div>
    </div>

    <input type="submit" value="order now" className="btn"/>

</form>

</section>
  )
}
