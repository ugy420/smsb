import React, { useEffect, useState } from 'react';
import GroundCard from './GroundCard';
import football from '../assets/foot.jpg';
import volleyball from '../assets/vo.jpg';
import basketball from '../assets/bas.jpg';

const GroundList = () => {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/allGround')
      .then((response) => response.json())
      .then((data) => setGrounds(data))
      .catch((error) => console.error('Error fetching ground data:', error));
  }, []);

  // Map images to specific ground types
  const groundImages = {
    football: football,
    volleyball: volleyball,
    basketball: basketball,
  };

  return (
    <div className="container mx-auto p-40">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Available Sports Grounds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grounds.map((ground) => (
          <GroundCard
            key={ground.id}
            ground={{
              ...ground,
              image: groundImages[ground.name.toLowerCase()] || football,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GroundList;
