import React from 'react';
import InfoCard from '../components/InformationCard';
import membersIcon from '../assets/members-icon.svg';
import groundsIcon from '../assets/ground-icon.svg';
import bookingsIcon from '../assets/bookings-icon.svg';

const AHome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          number={250000}
        />
      </div>
    </div>
  );
};

export default AHome;
