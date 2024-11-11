import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white py-12 mt-10">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10">

          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white tracking-wide transform hover:scale-105 transition duration-300 ease-in-out">
              Sports Ground Booking
            </h2>
            <p className="text-base mt-2 text-white opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-xs">
              Book sports grounds seamlessly and enjoy sports at your convenience.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-base text-white">
            <Link to="/about" className="hover:text-[#93C5FD] transform transition duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-[#93C5FD] transform transition duration-300">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-[#93C5FD] transform transition duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#93C5FD] transform transition duration-300">Terms of Service</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-white">
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
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white opacity-30"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <p>© {new Date().getFullYear()} Sports Ground Booking System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
