import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate, useParams } from 'react-router-dom';
import img from '../assets/event_bas.jpg';

const SportsClub = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('2024-10-17');
  const [groundDetails, setGroundDetails] = useState({});
  const [groundAvailability, setGroundAvailability] = useState([]);
  const navigate = useNavigate();

  // Fetch ground details from the API using the ID
  useEffect(() => {
    fetch(`http://localhost:3001/api/getGround/${id}`)
      .then((response) => response.json())
      .then((data) => { 
        setGroundDetails(data[0]);
      })
      .catch((error) => console.error('Error fetching ground data:', error));
  }, [id]);

  const availabilityData = {
    '2024-10-17': [
      { time: '6 PM - 7 PM', user: 'Khenrab', mobile: '17401566' },
      { time: '7 PM - 8 PM', user: 'Khenrab', mobile: '17401566' },
    ],
    '2024-10-18': [
      { time: '5 PM - 6 PM', user: 'Dorji', mobile: '17234567' },
      { time: '6 PM - 7 PM', user: 'Tashi', mobile: '17654321' },
    ],
    '2024-10-19': [
      { time: '4 PM - 5 PM', user: 'Phuntsho', mobile: '17123456' },
      { time: '5 PM - 6 PM', user: 'Wangchuk', mobile: '17987654' },
    ],
  };

  useEffect(() => {
    setGroundAvailability(availabilityData[selectedDate] || []);
  }, [selectedDate]);

  const handleBookNow = () => {
    navigate('/book');
  };

  return (
    <div className="bg-gray-100 mt-32 min-h-screen flex flex-col items-center">
      {/* Display ground details if available */}
      {groundDetails && groundDetails.name ? (
        <>
          {/* Ground Image */}
          <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={groundDetails.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Ground Information */}
          <div className="mt-6 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800">{groundDetails.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{groundDetails.name}</p>
            <p className="text-gray-600">
              {groundDetails.description || 'Get ready to kick off! Join us for our annual tournament.'}
            </p>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-700">Description</h2>
            <p className="text-gray-600 mt-2">
              {groundDetails.longDescription || 'Enjoy a day of sports with teams from across the region.'}
            </p>
          </div>
        </>
      ) : (
        <div className="mt-8 text-center">Loading ground details...</div>
      )}

      {/* Check Ground Availability */}
      <div className="mt-8 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-700">Check Ground Availability</h2>
        <div className="mt-4">
          <label className="block text-gray-600 mb-2">Select the date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg mt-4">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {groundAvailability.length > 0 ? (
                groundAvailability.map((slot, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{slot.time}</td>
                    <td className="py-3 px-4">{slot.user}</td>
                    <td className="py-3 px-4">{slot.mobile}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-3 px-4 text-center text-gray-500">
                    No bookings for the selected date yet...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Contact */}
      <div className="mt-8 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <button
          onClick={handleBookNow}
          className="mt-4 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SportsClub;
