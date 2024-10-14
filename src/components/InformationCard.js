import React from 'react';

const InfoCard = ({ icon, title, number, numberTextColor, BgColor }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex justify-between items-center w-full md:w-72">
      <div>
        <h3 className="text-xl font-light">{title}</h3>
        <p className={`text-3xl font-bold ${numberTextColor} p-2 rounded-lg`}>{number}</p>
      </div>
      
      <div>
        <img src={icon} alt={`${title} icon`} className={`h-10 w-10 ${BgColor}`} />
      </div>
    </div>
  );
};

export default InfoCard;
