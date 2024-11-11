import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white py-8 mt-10">
      <div className="container mx-auto px-6 sm:px-8 space-y-6">
        
        {/* Brand Section */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out space-y-2">
          <h2 className="text-3xl font-bold tracking-wide text-white">Sports Ground Booking</h2>
          <p className="text-sm text-white opacity-80 max-w-xs mx-auto">
            Book sports grounds seamlessly and enjoy sports at your convenience.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-base text-white font-medium">
          <Link to="/about" className="hover:text-[#93C5FD] transition duration-300">About Us</Link>
          <Link to="/contact" className="hover:text-[#93C5FD] transition duration-300">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-[#93C5FD] transition duration-300">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-[#93C5FD] transition duration-300">Terms of Service</Link>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-[#93C5FD] transform hover:scale-110 transition duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="hover:text-[#93C5FD] transform hover:scale-110 transition duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="hover:text-[#93C5FD] transform hover:scale-110 transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="hover:text-[#93C5FD] transform hover:scale-110 transition duration-300">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-white opacity-30"></div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <p>© {new Date().getFullYear()} Sports Ground Booking System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
