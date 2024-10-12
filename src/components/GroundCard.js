// src/components/GroundCard.js
import React from 'react';

const GroundCard = ({ ground }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img src={ground.image} alt={ground.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">{ground.name}</h5>
        <p className="text-gray-600 mb-4">{ground.description}</p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => window.location.href='/book'}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GroundCard;
