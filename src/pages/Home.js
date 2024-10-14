// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './Home.css'; // Make sure you have styles for Home
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import Events from './Events';

const Home = () => {
  return (
    <div className="container mx-auto mt-10 p-28">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">Welcome to the Sports Ground Booking System</h1>
      <p className="text-lg text-center mb-8 text-gray-700">Choose a ground to book:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Football Ground Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="football-ground-image-url" alt="Football Ground" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">Football Ground</h5>
            <p className="text-gray-600 mb-4">Enjoy playing football in our well-maintained ground.</p>
            <Link
              to="/book" // Use Link for internal navigation
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out:"
            >
              View
            </Link>
          </div>
        </div>

        {/* Volleyball Court Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="volleyball-court-image-url" alt="Volleyball Court" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">Volleyball Court</h5>
            <p className="text-gray-600 mb-4">Join us for an exciting game of volleyball.</p>
            <Link
              to="/book" // Use Link for internal navigation
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              View
            </Link>
          </div>
        </div>

        {/* Basketball Court Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src="basketball-court-image-url" alt="Basketball Court" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">Basketball Court</h5>
            <p className="text-gray-600 mb-4">Play basketball in our state-of-the-art facility.</p>
            <Link
              to="/book" // Use Link for internal navigation
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      {/* Title Bar Section */}
      <div className="mt-10">
        <div className="px-10 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold">
          Upcoming Events
        </div>
      </div>

      <section className="mt-10">
        <Events /> {/* Display the Events here */}
      </section>

      {/* About Us Section */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
        <p className="text-center text-gray-700">
          Welcome to our Sports Ground Booking System! We provide a platform for sports enthusiasts to reserve and enjoy various sports facilities, including football grounds, volleyball courts, and basketball courts. 
          Our mission is to promote physical activity and community engagement through sports. Whether you're looking to play for fun or to practice your skills, we have the right space for you!
        </p>
        <p className="text-center text-gray-700 mt-4">
          Join us today and experience the joy of sports!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Sports Ground Booking System. All Rights Reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
