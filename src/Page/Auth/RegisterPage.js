import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Login from '../../Components/nav/Login'
import RegisterHook from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
 
  const [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit] = RegisterHook();

    return (
        <Container  className="center" style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center  hieght-search">
          <Col sm={12} className="d-flex flex-column ">
            <label className="mx-auto title-login">  register </label>
            <input
             value={name}
             onChange={onChangeName}
              placeholder=" user..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
               value={email}
               onChange={onChangeEmail}
              placeholder="email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
             <input
       value={phone}
       onChange={onChangePhone}
            placeholder="Phone..."
            type="phone"
            className="user-input my-3  text-center mx-auto"
          />
            <input
          value={password}
          onChange={onChangePassword}
              placeholder=" password.."
              type="password"
              className="user-input my-3  text-center mx-auto"
            />
             <input
       value={confirmPassword}
       onChange={onChangeConfirmPassword}
            placeholder=" ConfirmPassword ..."
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
            <button onClick={OnSubmit}   className="btn-login mx-auto mt-4"> register now</button>
            <p className='register'> i don't have an account <Link className='lk' to="/login"> click here</Link> </p>
            <Login/>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    )
}

export default RegisterPage;
// const showLogin = () =>{  
//   document.querySelector('.login-form-container').classList.toggle('active');
// }
// onClick={showLogin} 
