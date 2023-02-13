import React, { useState } from "react";

import './loginStyle.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      window.location.href = "/user";
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="main-div">
        <div className="sub-main-div">

          <div className="input-main-div">

            <h1 className="header">Login</h1>

            <div className="input-div">
              <input className="input-filed"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input className="input-filed"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to='/recover' className="forget-btn">Forgot Password</Link>


            <button className="btttn-submit" type="submit">Login</button>

            <Link  to="/register" className="account-btn">Create Account</Link>

          </div>

        </div>




      </div>


      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;