import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/signup', values);
      console.log(res.data);
      if (res.data.message === "Signup successful") {
        navigate('/');
      }
    } catch (error) {
      console.error("Signup failed", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-green-600">SPORTS GROUND BOOKING</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter name" required 
            onChange={handleInput}/>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="your@example.com" required
            onChange={handleInput} />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter phone number" required
            onChange={handleInput} />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter password" required
            onChange={handleInput} />
          </div>
          <button type="submit" className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
