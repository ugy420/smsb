import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg p-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-white text-2xl font-bold">Sports Ground Booking</span>
        </div>

        <div className="space-x-10">
          <Link to="/Home" className="text-white hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link to="/ground-list" className="text-white hover:text-blue-400 transition duration-300">
            Ground List
          </Link>
          <Link to="/events" className="text-white hover:text-blue-400 transition duration-300">
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
