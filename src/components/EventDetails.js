import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../pages/footer';
const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Dummy event data
    const dummyEventData = [
      {
        id: '1',
        name: 'Football Tournament',
        image: 'https://via.placeholder.com/600x400',
        description: 'A thrilling football tournament with intense competition.',
        matches: [
          { date: '2024-11-20', time: '10:00 AM', description: 'Match A vs B' },
          { date: '2024-11-21', time: '12:00 PM', description: 'Match C vs D' },
          { date: '2024-11-22', time: '2:00 PM', description: 'Match E vs F' },
          { date: '2024-11-23', time: '4:00 PM', description: 'Match G vs H' },
          { date: '2024-11-24', time: '6:00 PM', description: 'Match I vs J' },
        ],
      },
      {
        id: '2',
        name: 'Volleyball Championship',
        image: 'https://via.placeholder.com/600x400', // Use a placeholder image
        description: 'The biggest volleyball championship of the year.',
        matches: [
          { date: '2024-11-25', time: '3:00 PM', description: 'Match A vs B' },
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
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold">{event.name}</h1>
      <img
        src={event.image}
        alt={event.name}
        className="h-64 w-full object-cover rounded-lg mt-4"
      />

      <h2 className="text-2xl font-semibold mt-8">Matches</h2>
      
      {/* Table for match details */}
      <table className="min-w-full mt-4 table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Time</th>
            <th className="border px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {event.matches.map((match, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{match.date}</td>
              <td className="border px-4 py-2">{match.time}</td>
              <td className="border px-4 py-2">{match.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-gray-600 mt-4">{event.description}</p>

      {/* Footer Section */}
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
};

export default EventDetails;
