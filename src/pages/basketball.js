import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SportsClub = () => {
  const [selectedDate, setSelectedDate] = useState('2024-10-17');
  const [groundAvailability, setGroundAvailability] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Mock data: availability for different dates
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

  // Update availability based on selected date
  useEffect(() => {
    setGroundAvailability(availabilityData[selectedDate] || []);
  }, [selectedDate]);

  // Function to handle navigation to the booking form
  const handleBookNow = () => {
    navigate('/book'); // Navigate to the BookingForm component
  };

  return (
    <div className="container mx-auto p-6">
      {/* Club Image */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/1200x400" // Replace with actual image URL
          alt="Justplay Sports Club"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Club Information */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Justplay Sports Club</h1>
        <p className="text-sm text-gray-600 mt-2">Hulimangala village</p>
        <p className="text-gray-600">JustPlay Sports Club, Behind JR Farm, Hulimangala Village, E-City Phase 1</p>
        <a href="https://maps.google.com" className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          View Us On Map
        </a>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Description</h2>
        <p className="text-gray-600 mt-2">
          Justplay Sports Club is one of the best Multi-sport clubs in Bangalore, with all the facilities like washroom,
          changing rooms, and lights available here.
        </p>
      </div>

      {/* Check Ground Availability */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Check Ground Availability</h2>
        <div className="mt-4">
          <label className="block text-gray-600 mb-2">Select the date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/4 text-gray-700"
          />
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg mt-4">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {groundAvailability.length > 0 ? (
                groundAvailability.map((slot, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{slot.time}</td>
                    <td className="py-2 px-4">{slot.user}</td>
                    <td className="py-2 px-4">{slot.mobile}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-2 px-4 text-center text-gray-500">
                    No availability for the selected date
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Contact */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
        <button
          onClick={handleBookNow} // Trigger navigation when button is clicked
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SportsClub;
