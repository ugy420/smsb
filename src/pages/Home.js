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
        console.log('Fetched data:', data); // Log fetched data for debugging

        const formatGrounds = data.map((ground) => {
          const image = ground.img ? require(`../assets/${ground.img}`) : bb; // Set fallback image if needed
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

  const activeGrounds = grounds.filter((ground) => ground.status === 'Active');
  console.log('Active grounds:', activeGrounds);

  const itemsPerPage = 3;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, activeGrounds.length - itemsPerPage));
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

      <div className="relative mt-10 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {activeGrounds.slice(currentIndex, currentIndex + itemsPerPage).map((ground) => (
            <div key={ground.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src={ground.image}
                alt={`${ground.name} Ground`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">{ground.name}</h5>
                <Link
                  to={`/sportsclub/${ground.id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {activeGrounds.length > itemsPerPage && (
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
              disabled={currentIndex + itemsPerPage >= activeGrounds.length}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
            >
              ❯
            </button>
          </>
        )}
      </div>

      <section className="mt-0">
        <Events showFooter={false} />
      </section>

      <section className="bg-blue-100 p-4 rounded-lg shadow-md">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
