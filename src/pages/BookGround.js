import React, { useState } from 'react';
import { HiUser, HiMail, HiPhone, HiCalendar, HiClock, HiOutlineDocumentText } from 'react-icons/hi';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    groundType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Book Your Ground</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiMail className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Date Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiCalendar className="text-gray-500 mr-2" />
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Time Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiClock className="text-gray-500 mr-2" />
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="flex-1 p-2 outline-none"
            />
          </div>

          {/* Ground Type Field */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <HiOutlineDocumentText className="text-gray-500 mr-2" />
            <select
              name="groundType"
              id="groundType"
              value={formData.groundType}
              onChange={handleChange}
              required
              className="flex-1 p-2 outline-none"
            >
              <option value="">Select a ground</option>
              <option value="Football Ground">Football Ground</option>
              <option value="Volleyball Court">Volleyball Court</option>
              <option value="Basketball Court">Basketball Court</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
