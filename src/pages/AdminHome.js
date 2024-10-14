import React from 'react';
import InfoCard from '../components/InformationCard';
import StackedBarChart from '../components/graph';
import membersIcon from '../assets/members-icon.svg';
import groundsIcon from '../assets/ground-icon.svg';
import bookingsIcon from '../assets/bookings-icon.svg';
import DataGriddy from '../components/datagrid.tsx';

const AHome = () => {
  return (
    <div className="flex flex-col overflow-y-auto mt-10 p-28">
      <div className="flex flex-col items-center space-y-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          <InfoCard
            icon={membersIcon}
            title="Members"
            number={406}
          />
          <InfoCard
            icon={groundsIcon}
            title="Grounds"
            number={4}
          />
          <InfoCard
            icon={bookingsIcon}
            title="Bookings"
            number={671}
          />
        </div>
        <div className="bg-blue-600 p-5 text-center text-white font-bold text-lg rounded">Bookings</div>
        <div>
        <StackedBarChart/>
        </div>
        <div className="bg-blue-600 p-5 text-center text-white font-bold text-lg rounded">Recent</div>
        <div><DataGriddy/></div>
      </div>
    </div>
  );
};

export default AHome;
