import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import football from '../assets/foot.jpg';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/getevents')
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((event) => {
          const image = event.img_slot
            ? require(`../assets/${event.img_slot}`)
            : football; // Use a default image if img is not found

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
    <div className="bg-gray-100 min-h-screen py-10 mt-28">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Upcoming Events</h1>
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong>Date:</strong> {event.date}
                <br />
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <div className="flex justify-center mt-6">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
