import React from 'react';

const InfoCard = ({ icon, title, number }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center space-x-4">
      <div className="icon bg-gray-300 rounded-full p-3">
        <img src={icon} alt={`${title} icon`} className="h-8 w-8" />
      </div>
      <div className="text">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-x0.5 font-bold">{number}</p>
      </div>
    </div>
  );
};

export default InfoCard;
