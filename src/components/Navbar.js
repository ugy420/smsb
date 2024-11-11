import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToAbout = () => {
    if (location.pathname === '/home') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 object-cover"
          />
          <span className="text-white text-2xl font-bold">Sports Ground Booking</span>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`}></i>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className={`hidden lg:flex space-x-6`}>
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
          <button
            onClick={scrollToAbout}
            className="text-white hover:text-blue-200 transition duration-300 font-medium"
          >
            About Us
          </button>
          <Link to="/" className="text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-blue-700 p-4 space-y-4">
          <Link to="/home" className="block text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/ground-list" className="block text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
            Ground List
          </Link>
          <Link to="/events" className="block text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link to="/mybooking" className="block text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
            MyBooking
          </Link>
          <button
            onClick={() => { scrollToAbout(); setIsOpen(false); }}
            className="block text-white hover:text-blue-200 transition duration-300 font-medium"
          >
            About Us
          </button>
          <Link to="/" className="block text-white hover:text-blue-200 transition duration-300 font-medium" onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}>
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
