
/* src/components/Navbar.js */
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure universal styles are applied

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <h1>My Art Gallery</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;