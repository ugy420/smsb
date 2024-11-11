import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import football from '../assets/foot.jpg';
import Footer from './footer';  // Import Footer component

const Events = ({ showFooter = true }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/getevents')
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((event) => {
          const image = event.img_slot
            ? require(`../assets/${event.img_slot}`)
            : football;

          return {
            ...event,
            image,
          };
        });
        setEvents(formattedEvents);
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="py-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white mt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4">
          Upcoming Events
        </h1>
        <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto">
          Stay updated with the latest events and book your spot for an exciting time. Don’t miss out on the action!
        </p>
      </header>

      {/* Events List Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-48 w-full object-cover transition-all duration-500 ease-in-out"
                  />
                  {/* Add a darker overlay without blur */}
                  <div className="absolute inset-0 bg-black opacity-25 transition-all duration-500 ease-in-out"></div>
                </div>
                <div className="relative p-6 z-10"> {/* Ensure text stays on top */}
                  <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
                  <p className="text-gray-600 mt-2">
                    <strong>Date:</strong> {event.date}
                    <br />
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="text-gray-600 mt-4">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default Events;
