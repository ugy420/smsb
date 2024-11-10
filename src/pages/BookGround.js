// BookingForm.js
import React, { useState, useEffect } from 'react';
import { HiCalendar, HiClock, HiOutlineDocumentText } from 'react-icons/hi';
import { useUser } from '../components/userprovider';

const BookingForm = ({ groundType, date, groundId }) => { // Added groundId as a prop
  const { user } = useUser();

  const [formData, setFormData] = useState({
    groundType: groundType || '',
    date: date || '',
    time: '',
  });

  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    if (formData.date) {
      updateTimeOptions(formData.date);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'date') {
      updateTimeOptions(value);
    }
  };

  const updateTimeOptions = (seldate) => {
    const date = new Date(seldate);
    const day = date.getDay();

    let times = [];

    if (day === 0 || day === 6) {
      times = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 1:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM',
      ];
    } else {
      times = ['4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM'];
    }

    setTimeOptions(times);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user;
    const { date, time } = formData;

    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    const payload = {
      userId: parseInt(userId,10),
      groundId: parseInt(groundId,10), // Use groundId from the prop here
      date,
      time,
    };

    try {
      const response = await fetch('http://localhost:3001/api/insBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Booking confirmed:', result);
      } else {
        console.error('Booking failed:', result);
        console.log(payload);
      }
    } catch (error) {
      console.error('Error making booking request:', error);
      console.log(payload);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-10 px-4">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Book Your Ground</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* groundType */}
          <div className="flex items-center border-b border-gray-200 py-2">
            <HiOutlineDocumentText className="text-gray-500 mr-2" />
            <input
              type="text"
              name="groundType"
              value={formData.groundType}
              onChange={handleChange}
              readOnly
              className="focus:outline-none w-full text-gray-700"
            />
          </div>

          {/* Date Field */}
          <div className="flex items-center border-b-2 border-gray-300">
            <HiCalendar className="text-gray-500 mr-2" />
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="flex-1 p-2 outline-none rounded-md"
            />
          </div>

          {/* Time Field */}
          <div className="flex items-center border-b-2 border-gray-300">
            <HiClock className="text-gray-500 mr-2" />
            <select
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="flex-1 p-2 outline-none rounded-md"
            >
              <option value="">Select a time slot</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
