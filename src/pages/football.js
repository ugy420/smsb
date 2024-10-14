import React from 'react';
import 'tailwindcss/tailwind.css';

const SportsClub = () => {
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

      {/* Amenities & Addons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Amenities */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Amenities</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Boundary Netting
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Lights
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Washroom
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Changing Room
            </li>
          </ul>
        </div>

        {/* Addons */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">AddOns</h3>
          <ul className="mt-4 space-y-2">
            <li>No addons</li>
          </ul>
        </div>
      </div>

      {/* Coupons */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">Coupons Available</h3>
        <p className="text-gray-500 mt-2">No coupons available</p>
      </div>

      {/* Booking Contact */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700">For Booking Contact Facility Manager</h3>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          View Number
        </button>
      </div>
    </div>
  );
};

export default SportsClub;
