import React from 'react';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <input type='search' placeholder="Search..." />
      <ul>
        {/* Manzillar App.jsx dagi path-lar bilan bir xil (contacts, students, teachers) */}
        <li><Link to="/contacts">Contact</Link></li>
        <li><Link to="/students">Student</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;