import React from 'react'
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]=LoginHook();

  return (
    <Container  className="container-fluid  center" style={{ minHeight: "680px" }}>
   
<Row className='form'>
    <Col>
    <h3>user login</h3>
    <input
   value={email}
   onChange={onChangeEmail}
    type="email" placeholder="email" className="box"/>
    <input
      value={password}
      onChange={onChangePassword}
    type="password" placeholder="password" className="box"/>
    <p> forget your password <Link to="/user/Forget-password">click here</Link> </p>
    <button onClick={onSubmit}   className="btn-login mx-auto mt-4"> login</button>
    <p>or login with</p>
    <div className="buttons">
        <Link to="/admin/allproducts" className="btn"> google </Link>
        <Link to="#" className="btn"> facebook </Link>
    </div>
    <p> i don't have an account <Link to="/Register">create one</Link> </p>
    </Col>
    </Row>
<ToastContainer />

</Container>
  )
}

export default Login;

// container-fluid 



