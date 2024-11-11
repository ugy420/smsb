import React, { useEffect, useState } from 'react';
import GroundCard from './GroundCard';
import football from '../assets/foot.jpg';
import volleyball from '../assets/vo.jpg';
import basketball from '../assets/bas.jpg';

const GroundList = () => {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/allGround')
      .then((response) => response.json())
      .then((data) => {
        const formatGrounds = data.map((ground) => {
          const image = require(`../assets/${ground.img}`);

          return {
            ...ground,
            image,
          };
        });
        setGrounds(formatGrounds);
      })
      .catch((error) => console.error('Error fetching ground data:', error));
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="py-20 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white mt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4">
          Book Your Sports Ground
        </h1>
        <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto">
          Seamlessly book sports grounds for your next match and enjoy the game.
        </p>
      </header>

      {/* Ground List Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {grounds.map((ground) => (
              <div
                key={ground.id}
                className="group relative rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <GroundCard
                  ground={{
                    ...ground,
                    image: ground.image || football,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
              <a href="/about" className="hover:text-[#93C5FD] transform transition duration-300">About Us</a>
              <a href="/contact" className="hover:text-[#93C5FD] transform transition duration-300">Contact</a>
              <a href="/privacy-policy" className="hover:text-[#93C5FD] transform transition duration-300">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-[#93C5FD] transform transition duration-300">Terms of Service</a>
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

export default GroundList;
