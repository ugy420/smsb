import React, { useState, useEffect } from 'react';
import { HiCalendar, HiClock, HiOutlineDocumentText } from 'react-icons/hi';
import { useUser } from '../components/userprovider';

const BookingForm = ({ groundType, date, groundId, onSuccess }) => {
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

    const times = day === 0 || day === 6
      ? ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM','1:00 PM - 2:00 PM','2:00 PM - 3:00 PM','3:00 PM - 4:00 PM','4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM',]
      : ['4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM'];

    setTimeOptions(times);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if date or time is not selected
    if (!formData.date) {
      alert('Please select a date before submitting the booking.');
      return;
    }

    if (!formData.time) {
      alert('Please select a time before submitting the booking.');
      return;
    }

    const payload = {
      groundId: parseInt(groundId, 10),
      date: formData.date,
      time: formData.time,
    };

    try {
      const bookingPayload = {
        userId: parseInt(user, 10),
        groundId: parseInt(groundId, 10),
        date: formData.date,
        time: formData.time,
      };

      const bookingResponse = await fetch('http://localhost:3001/api/insBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingPayload),
      });

      const bookingData = await bookingResponse.json();

      if (bookingResponse.ok) {
        onSuccess();
      } else if (bookingResponse.status === 409) {
        // Handle the duplicate booking error
        alert(bookingData.message || 'This booking already exists. Please select a different time or date.');
      } else {
        console.error('Booking failed:', bookingData);
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error making booking request:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-4 bg-transparent">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Book Your Ground</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <HiOutlineDocumentText className="text-gray-400" />
            <span className="text-gray-800">{groundType}</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <HiCalendar className="text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <HiClock className="text-gray-400" />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
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
