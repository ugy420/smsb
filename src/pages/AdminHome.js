import React from 'react';
import InfoCard from '../components/InformationCard';
import StackedBarChart from '../components/graph';
import membersIcon from '../assets/members-icon.svg';
import groundsIcon from '../assets/ground-icon.svg';
import bookingsIcon from '../assets/bookings-icon.svg';
import DataGriddy from '../components/datagrid.tsx';

const AHome = () => {
  return (
    <div className="flex flex-col overflow-y-auto mt-2 p-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-screen-lg">
        <div className="col-span-2">
          <StackedBarChart />
        </div>

        <div className="flex flex-col space-y-6">
          <InfoCard
            icon={membersIcon}
            title="Members"
            number="98"
            BgColor="bg-red-600"   // Background color for the number
            numberTextColor="text-red-600" // Font color for the number
          />
          <InfoCard
            icon={groundsIcon}
            title="Grounds"
            number="5"
            BgColor="bg-green-600"   // Background color for the number
            numberTextColor="text-green-600" // Font color for the number
          />
          <InfoCard
            icon={bookingsIcon}
            title="Bookings"
            number="664"
            BgColor="bg-yellow-500"  // Background color for the number
            numberTextColor="text-yellow-500" // Font color for the number
          />
        </div>
      </div>

      <div className="mt-10 bg-blue-600 p-5 text-center text-white font-bold text-lg rounded">
        Recent
      </div>
      <div className="mt-6">
        <DataGriddy />
      </div>
    </div>
  );
};

export default AHome;
