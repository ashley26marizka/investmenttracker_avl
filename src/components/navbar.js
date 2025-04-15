import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Optional CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Investa</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
