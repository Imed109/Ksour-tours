import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.scss";
import ksour from "../assests/ksour.png";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for the user in local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    // Remove the user from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // Update state to reflect logged out status
  };

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
            <li><Link to="/omra">Omra</Link></li>
            <li><Link to="/ferries">Ferries</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>

            {/* ... other links */}
            <li><Link to="/contact">Contact</Link></li>
            {user ? (
              <>
                <li><button onClick={handleLogout}>Log out</button></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> {user}</li>
              </>
            ) : (
              <>
                <li><Link to="/login" >Se connecter</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
