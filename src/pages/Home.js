import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import 'tailwindcss/tailwind.css';
import Events from './Events';
import About from '../components/About';
import bb from '../assets/bas.jpg';

const Home = () => {
  const [grounds, setGrounds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/allGround');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const formatGrounds = data.map((ground) => {
          const image = require(`../assets/${ground.img}`);

          return {
            ...ground,
            image,
          };
        });
        setGrounds(formatGrounds);
      } catch (error) {
        console.error('Error fetching ground data:', error);
      }
    };

    fetchGrounds();
  }, []);

  const itemsPerPage = 3;

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, grounds.length - itemsPerPage));
  };

  return (
    <div className="container mx-auto mt-10 p-28">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">Welcome to the Sports Ground Booking System</h1>
      <p className="text-lg text-center mb-8 text-gray-700">Choose a ground to book:</p>

      <div className="relative">
        {/* Carousel Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {grounds.slice(currentIndex, currentIndex + itemsPerPage).map((ground) => (
            <div key={ground.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src={ground.image || bb}
                alt={`${ground.name} Ground`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">{ground.name}</h5>
                <p className="text-gray-600 mb-4">Status: {ground.status}</p>
                <Link
                  to={`/sportsclub/${ground.id}`} // Redirect with ground id
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {grounds.length > itemsPerPage && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= grounds.length}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Title Bar Section */}
      <div className="mt-10">
        <div className="px-10 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold">
          Upcoming Events
        </div>
      </div>

      <section className="mt-0">
        <Events />
      </section>

      <section className="bg-blue-100 p-4 rounded-lg shadow-md">
        <About />
      </section>

      {/* Footer */}
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

    </div>
  );
};

export default Home;
