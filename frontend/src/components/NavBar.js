import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.scss";
import ksour from "../assests/ksour.png";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Assuming you have user role stored

  useEffect(() => {
    // Check for the user and their role in local storage
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    if (storedUser) {
      setUser(storedUser);
    }
    if (storedRole === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the user and role from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setUser(null); // Update state to reflect logged out status
    setIsAdmin(false); // Update admin status
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
            <li><Link to="/contact">Contact</Link></li>
            {user ? (
              <>
                {isAdmin ? (
                  <li><Link to="/admin/dashboard">Admin</Link></li>
                ) : (
                  <li><Link to="/profile">{user}</Link></li>
                )}
                <li><button onClick={handleLogout}>Se deconnecter</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Se connecter</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
