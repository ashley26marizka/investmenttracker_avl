import React from "react";
import "./signup.css";
const loginImage="https://img.freepik.com/premium-photo/isolated-investment-growth-3d-illustration_839035-121179.jpg"

const Signup = () => {
  return (
    <div className="container">
      <div className="right" style={{backgroundImage:`url(${loginImage})`,backgroundSize: "cover",
    backgroundPosition: "center",}}>
        <form>
          <h2>signup</h2>

          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <i className="fas fa-phone"></i>
            <input type="text" placeholder="Mobile Number" required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Re-enter Password" required />
          </div>

          <button type="submit">signup</button>
          <p className="signup-link">
            Already have an account <a href="/login">Login</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
