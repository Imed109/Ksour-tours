import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.scss"; // Import the SCSS file
import ksour from "../assests/ksour.png"
const NavBar = () => {
  return (
    <div className="navbar-wrapper">

    <nav className="navbar">
      <div className="navbar-brand">
      <Link to="/" className="navbar-brand">
    <img src={ksour} alt="Agency Logo" className="logo" />
    <span className="brand-text">Ksour Tour</span>
  </Link>
      </div>
      <div className="navbar-links">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airlines">Airlines</Link></li>
          <li><Link to="/Ferries">Ferries</Link></li>
          <li><Link to="/omra">Omra</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><button >Se connecter</button></li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
