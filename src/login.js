import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const loginImage="https://img.freepik.com/premium-photo/isolated-investment-growth-3d-illustration_839035-121179.jpg"
const Login = () => {
  return (
    <div className="container">
      <div className="right" style={{backgroundImage:`url(${loginImage})`,backgroundSize: "cover",
    backgroundPosition: "center",}}>
        <form>
          <h2>Login</h2>

          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account?<Link to="/signup">Sign up</Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
