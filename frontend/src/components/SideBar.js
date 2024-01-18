import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css"; // Your sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Ksour Tour</h2>
      <ul className="sidebar-list">
      <li>
          <Link to="/admin/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/admin/airlines">Airlines</Link>
        </li>
        <li>
          <Link to="/admin/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/admin/ferries">Ferries</Link>
        </li>
        <li>
          <Link to="/admin/omra">Omra</Link>
        </li>
        
        <li>
          <Link to="/admin/users">Clients</Link>
        </li>
        {/* Add more sidebar links for admin routes */}
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
