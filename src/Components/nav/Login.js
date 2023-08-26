import React from 'react'
import  LoginHook from '../../hook/auth/login-hook'
import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
export const Login = () => {


    const hideLogin = () =>{
        document.querySelector('.login-form-container').classList.remove('active');
      }
  
  return (
    <div className="login-form-container">

<span id="close-login-form" className="fas fa-times" onClick={hideLogin}></span>

<form action="">
    <h3>user login</h3>
    <input
   
    type="email" placeholder="email" className="box"/>
    <input
   
    type="password" placeholder="password" className="box"/>
    <p> forget your password <a href="#">click here</a> </p>
    <input 
   
     type="submit" value="login" className="btn"/>
    <p>or login with</p>
    <div className="buttons">
        <a href="/admin/allproducts" className="btn"> google </a>
        <a href="#" className="btn"> facebook </a>
    </div>
    <p> don't have an account <a href="/Register">create one</a> </p>
</form>

</div>
  )
}

export default Login;
