import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../pages/footer';
import footballImage from '../assets/foot.jpg';
import Sus from '../assets/sus.jpg';
import rig from '../assets/R.jpg';


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Dummy event data
    const dummyEventData = [
      {
        id: '1',
        name: 'Football Tournament',
        image: footballImage,
        description:
          'The Football Tournament is an exciting, action-packed competition where teams from various regions compete for the championship title. With intense matches, passionate players, and thrilling moments, this tournament promises to deliver non-stop entertainment. Teams battle it out in a series of high-energy games, showcasing exceptional skills and teamwork. Whether you are a player or a fan, this tournament offers an unforgettable experience, celebrating the spirit of football and sportsmanship.',
        matches: [
          { date: '2024-11-20', time: '10:00 AM', description: ' Civil vs ECE' },
          { date: '2024-11-21', time: '12:00 PM', description: ' IT vs Geo' },
          { date: '2024-11-22', time: '2:00 PM', description: 'Water Res vs Electrical' },
          { date: '2024-11-23', time: '4:00 PM', description: 'ICE vs IT' },
        ],
      },
      {
        id: '2',
        name: 'Volleyball Championship',
        image: Sus, // Use a placeholder image
        description: 'The biggest volleyball championship of the year.',
        matches: [
          { date: '2024-11-25', time: '3:00 PM', description: 'Match IT vs Civil' },
          { date: '2024-11-26', time: '5:00 PM', description: 'Match C vs D' },
          { date: '2024-11-27', time: '7:00 PM', description: 'Match E vs F' },
          { date: '2024-11-28', time: '9:00 PM', description: 'Match G vs H' },
          { date: '2024-11-29', time: '11:00 AM', description: 'Match I vs J' },
        ],
      },
      {
        id: '3',
        name: 'Volleyball Championship',
        image: rig, // Use a placeholder image
        description: 'The biggest volleyball championship of the year.',
        matches: [
          { date: '2024-11-25', time: '3:00 PM', description: 'Match IT vs Civil' },
          { date: '2024-11-26', time: '5:00 PM', description: 'Match C vs D' },
          { date: '2024-11-27', time: '7:00 PM', description: 'Match E vs F' },
          { date: '2024-11-28', time: '9:00 PM', description: 'Match G vs H' },
          { date: '2024-11-29', time: '11:00 AM', description: 'Match I vs J' },
        ],
      },
      {
        id: '4',
        name: 'Volleyball Championship',
        image: Sus, // Use a placeholder image
        description: 'The biggest volleyball championship of the year.',
        matches: [
          { date: '2024-11-25', time: '3:00 PM', description: 'Match IT vs Civil' },
          { date: '2024-11-26', time: '5:00 PM', description: 'Match C vs D' },
          { date: '2024-11-27', time: '7:00 PM', description: 'Match E vs F' },
          { date: '2024-11-28', time: '9:00 PM', description: 'Match G vs H' },
          { date: '2024-11-29', time: '11:00 AM', description: 'Match I vs J' },
        ],
      },
    ];

    // Find the event that matches the `id` from the URL
    const eventData = dummyEventData.find((event) => event.id === id);
    setEvent(eventData);
  }, [id]);

  if (!event) {
    return <div>Loading...</div>; // Show loading until the event is fetched
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4">
          Event Details
        </h1>
        <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto">
          Stay updated with the latest events and book your spot for an exciting time. Don’t miss out on the action!
        </p>
      </header>

      {/* Image Container */}
      <div className="w-full max-w-4xl mx-auto mt-6 relative group">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
        />
        {/* Optional overlay effect on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 flex justify-center">Matches</h2>

      {/* Table for match details */}
      <div className="overflow-x-auto mt-4 px-4 sm:px-8">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-md border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Date</th>
              <th className="px-4 py-2 text-left font-medium">Time</th>
              <th className="px-4 py-2 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {event.matches.map((match, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{match.date}</td>
                <td className="border px-4 py-2">{match.time}</td>
                <td className="border px-4 py-2">{match.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modern Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
        <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
      </div>

      {/* Footer Section */}
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
};

export default EventDetails;
