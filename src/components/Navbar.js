import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();

  const scrollToAbout = () => {
    // Only scroll if we’re on the home page
    if (location.pathname === '/home') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 object-cover" // Adjust size as needed
          />
          <span className="text-white text-2xl font-bold">Sports Ground Booking</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/home" className="text-white hover:text-blue-200 transition duration-300 font-medium">
            Home
          </Link>
          <Link to="/ground-list" className="text-white hover:text-blue-200 transition duration-300 font-medium">
            Ground List
          </Link>
          <Link to="/events" className="text-white hover:text-blue-200 transition duration-300 font-medium">
            Events
          </Link>
          <Link to="/mybooking" className="text-white hover:text-blue-200 transition duration-300 font-medium">
            MyBooking
          </Link>
          <Link
            to="/home" // Keep it pointing to home
            className="text-white hover:text-blue-200 transition duration-300 font-medium"
            onClick={scrollToAbout}
          >
            About Us
          </Link>
          <Link to="/" className="text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
