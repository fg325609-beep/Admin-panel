import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layaut.scss'; // Pastda ushbu stillarni ham beraman

const Layaut = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar doimiy chap tomonda turadi */}
      <Sidebar />
      
      {/* O'ng tomondagi asosiy kontent o'zgaruvchan qismi */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layaut;