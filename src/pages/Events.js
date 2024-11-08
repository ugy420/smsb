import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import football from '../assets/foot.jpg';
import volleyball from '../assets/vo.jpg';
import basketball from '../assets/bas.jpg';

const eventsData = [
  {
    id: 1,
    name: 'Football Championship',
    date: '2024-10-20',
    time: '10:00 AM',
    description: 'Join us for the annual football championship!',
    image: football,
  },
  {
    id: 2,
    name: 'Volleyball Tournament',
    date: '2024-10-25',
    time: '2:00 PM',
    description: 'Compete in our exciting volleyball tournament.',
    image: volleyball, // Replace with your actual image URL
  },
  {
    id: 3,
    name: 'Basketball League',
    date: '2024-11-01',
    time: '5:00 PM',
    description: 'Participate in the basketball league this season.',
    image: basketball, // Replace with your actual image URL
  },
];

const Events = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-28">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Upcoming Events</h1>
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong>Date:</strong> {event.date}<br />
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              {/* Center the button */}
              <div className="flex justify-center mt-6">
              {/* <Link
              to="/sportsclub" // Redirect to the SportsClub page
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
              >
              View
            </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
