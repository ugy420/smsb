// src/components/BookingForm.js
import React, { useState } from 'react';

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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Book Your Ground</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="time">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="groundType">
            Ground Type
          </label>
          <select
            name="groundType"
            id="groundType"
            value={formData.groundType}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition"
          >
            <option value="">Select a ground</option>
            <option value="Football Ground">Football Ground</option>
            <option value="Volleyball Court">Volleyball Court</option>
            <option value="Basketball Court">Basketball Court</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
