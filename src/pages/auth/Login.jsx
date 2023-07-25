import React from 'react';
import loginImg from "../../images/login.jpg";
import {FaGoogle} from "react-icons/fa"
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className='container'>
        <div className="image-box">
            <img src={loginImg} alt="login" />
        </div>
        <div className="login-form">
            
            <form className='login'>
                <h1 className='login-head'>login</h1>
                <input type="text" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
                <button type='submit' id='login'>L O G I N</button>
                <p className='alt'>--OR--</p>
            </form>
            <div className="other-options">
            <button type='submit'> <FaGoogle color='white'/> Login With Google</button>
            <Link to='/reset'>Forgot Password?</Link>
            <Link to='/register'>Create an Account</Link>
            </div>
        </div>
    </div>
  )
}

export default Login