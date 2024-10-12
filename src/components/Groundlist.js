// src/components/GroundList.js
import React from 'react';
import GroundCard from './GroundCard';

const GroundList = () => {
  const grounds = [
    {
      id: 1,
      name: 'Football Ground',
      description: 'Enjoy playing football in our well-maintained ground.',
      image: 'football-ground-image-url',
    },
    {
      id: 2,
      name: 'Volleyball Court',
      description: 'Join us for an exciting game of volleyball.',
      image: 'volleyball-court-image-url',
    },
    {
      id: 3,
      name: 'Basketball Court',
      description: 'Play basketball in our state-of-the-art facility.',
      image: 'basketball-court-image-url',
    },
  ];

  return (
    <div className="container mx-auto p-40">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Available Sports Grounds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grounds.map((ground) => (
          <GroundCard key={ground.id} ground={ground} />
        ))}
      </div>
    </div>
  );
};

export default GroundList;
