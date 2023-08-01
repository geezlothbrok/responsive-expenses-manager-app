import React from "react";
import loginImg from "../../images/login.jpg";
import {FcGoogle} from "react-icons/fc"
import { Link } from "react-router-dom";
import "./Login.css"

function Login() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={loginImg} alt="login" />
      </div>
     
        <form>
          <input
            type="email"
            name="email"
            placeholder="Input Your Email Here..."
            required
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            inputMode="email"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
          <button type="submit" className="btn btn-primary">sign in</button>
          <button type="button"><FcGoogle /> sign in with google</button>
          <Link to="/reset">Forgot Password?</Link>
          <Link to="/register">Create an Account</Link>

        </form>
  
    </div>
  );
}

export default Login;
