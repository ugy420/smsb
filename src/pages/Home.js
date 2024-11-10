import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'tailwindcss/tailwind.css';
import Events from './Events';
import About from '../components/About';
import football from '../assets/foot.jpg';
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

      <section className="mt-10">
        <Events />
      </section>

      {/* About Us Section */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-md mt-10">
        <About />
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
