import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useParams } from 'react-router-dom';
import img from '../assets/event_bas.jpg';
import BookingForm from './BookGround';

const SportsClub = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [groundDetails, setGroundDetails] = useState({});
  const [groundAvailability, setGroundAvailability] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/api/getGround/${id}`)
      .then((response) => response.json())
      .then((data) => { 
        setGroundDetails(data[0]);
      })
      .catch((error) => console.error('Error fetching ground data:', error));
  }, [id]);

  const fetchAvailability = () => {
    if (selectedDate) {
      fetch(`http://localhost:3001/api/getBookingsbd/${id}?date=${selectedDate}`)
        .then((response) => response.json())
        .then((data) => {
          setGroundAvailability(data || []);
        })
        .catch((error) => console.log('Error fetching availability data', error));
    }
  };
  
  useEffect(() => {
    fetchAvailability();
  }, [selectedDate]);

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const closeModalAndRefresh = () => {
    setShowBookingForm(false);
    fetchAvailability();
  };

  return (
    <div className="bg-gray-100 mt-32 min-h-screen flex flex-col items-center">
      {groundDetails && groundDetails.name ? (
        <>
          <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <img src={img} alt={groundDetails.name} className="w-full h-96 object-cover" />
          </div>

          <div className="mt-6 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800">{groundDetails.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{groundDetails.name}</p>
            <p className="text-gray-600">
              {groundDetails.description || 'Get ready to kick off! Join us for our annual tournament.'}
            </p>
          </div>

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
                groundAvailability.map((slot) => (
                  <tr key={`${slot.booking_time}`} className="border-b">
                    <td className="py-3 px-4">{slot.booking_time}</td>
                    <td className="py-3 px-4">{slot.name}</td>
                    <td className="py-3 px-4">{slot.phone}</td>
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

      <div className="mt-8 max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <button
          onClick={handleBookNow}
          className="mt-4 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Book Now
        </button>
      </div>

      {showBookingForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowBookingForm(false)}
        >
          <div
            className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <BookingForm
              groundType={groundDetails.name}
              date={selectedDate}
              groundId={id}
              onSuccess={closeModalAndRefresh}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsClub;
