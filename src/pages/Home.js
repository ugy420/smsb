import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import 'tailwindcss/tailwind.css';
import Events from './Events';
import About from '../components/About';
import bb from '../assets/bas.jpg';
import Footer from './footer';

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

  const itemsPerPage = 2;

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, grounds.length - itemsPerPage));
  };

  return (
    <div className="container mx-auto">
      <header className="py-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white mt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4">
          Welcome to the Sports Ground Booking System
        </h1>
        <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto">
          Choose a ground to book
        </p>
      </header>

      <div className="relative mt-10 p-4">
        {/* Carousel Wrapper */}
        <div className="flex flex-col space-y-4">
          {grounds.slice(currentIndex, currentIndex + itemsPerPage).map((ground) => (
            <div key={ground.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ground.image || bb}
                  alt={`${ground.name} Ground`}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold">
                  {ground.name}
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-700 mb-2">{ground.description}</p>
                <p className="text-gray-600 mb-4">Status: {ground.status}</p>
                <Link
                  to={`/sportsclub/${ground.id}`}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {grounds.length > itemsPerPage && (
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-600 transition"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= grounds.length}
              className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-600 transition"
            >
              ❯
            </button>
          </div>
        )}
      </div>

      <section id="events" className="mt-8">
        <Events showFooter={false} />
      </section>

      <section id="about" className="bg-blue-50 p-6 mt-10 rounded-lg shadow-lg">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
