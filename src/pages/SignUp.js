// src/pages/Signup.js
import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-green-600">SPORTS GROUND BOOKING</h2>
        <form>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="your@example.com" required />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400" placeholder="password" required />
          </div>
          <button type="submit" className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Sign In</button>
        </form>
        <p className="mt-4 text-center">Create An Account?</p>
        <div className="flex justify-between mt-4">
          <button className="flex-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100">Continue With Google</button>
          <button className="flex-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100">Continue With Microsoft</button>
        </div>
        <p className="mt-4 text-center">Are You A Venue Administrator? <a href="/login" className="text-green-600 underline">Sign In Here.</a></p>
      </div>
    </div>
  );
};

export default Signup;
