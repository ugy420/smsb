import React from 'react';

const InfoCard = ({ icon, title, number }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex items-center space-x-4 w-full md:w-72">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg font-bold">{number}</p>
      </div>
      <div className="bg-gray-300 rounded-full p-3">
        <img src={icon} alt={`${title} icon`} className="h-12 w-12" />
      </div>
    </div>
  );
};

export default InfoCard;
