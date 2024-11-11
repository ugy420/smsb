import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef
import { useNavigate } from 'react-router-dom';
import InfoCard from '../components/InformationCard';
import StackedBarChart from '../components/graph';
import membersIcon from '../assets/members-icon.svg';
import groundsIcon from '../assets/ground-icon.svg';
import bookingsIcon from '../assets/bookings-icon.svg';
import DataGriddy from '../components/datagrid.tsx';

const AHome = () => {
  const navigate = useNavigate();
  const recentRef = useRef(null);

  const [userCount, setUserCount] = useState(null);
  const [groundCount, setGroundCount] = useState(null);
  const [eventCount, setEventCount] = useState(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getUserCount');
        if (response.ok) {
          const data = await response.json();
          setUserCount(data.count);
        } else {
          console.error('Failed to fetch user count');
        }
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    const fetchGroundCount = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getGroundCount');
        if (response.ok) {
          const data = await response.json();
          setGroundCount(data.count);
        } else {
          console.error('Failed to fetch ground count');
        }
      } catch (error) {
        console.error('Error fetching ground count:', error);
      }
    };

    const fetchEventCount = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getEventsCount');
        if (response.ok) {
          const data = await response.json();
          setEventCount(data.count);
        } else {
          console.error('Failed to fetch event count');
        }
      } catch (error) {
        console.error('Error fetching event count:', error);
      }
    };

    fetchUserCount();
    fetchGroundCount();
    fetchEventCount();
  }, []);

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
            number={userCount !== null ? userCount : 'Loading...'} // Display the user count or 'Loading...' if not fetched
            BgColor="bg-red-600"   // Background color for the number
            numberTextColor="text-red-600" // Font color for the number
            onClick={() => navigate('/members')}  // Navigate to members page on click
          />
          <InfoCard
            icon={groundsIcon}
            title="Grounds"
            number={groundCount !== null ? groundCount : 'Loading...'} // Display the ground count or 'Loading...'
            BgColor="bg-green-600"   // Background color for the number
            numberTextColor="text-green-600" // Font color for the number
            onClick={() => navigate('/grounds')}  // Navigate to grounds page on click
          />
          <InfoCard
            icon={bookingsIcon}
            title="Event"
            number={eventCount !== null ? eventCount : 'Loading...'}  // Display the booking count or 'Loading...'
            BgColor="bg-yellow-500"  // Background color for the number
            numberTextColor="text-yellow-500" // Font color for the number
            onClick={() => navigate('/aevents')}  // Handle bookings click
          />
        </div>
      </div>

      <div 
        className="mt-10 bg-blue-600 p-5 text-center text-white font-bold text-lg rounded"
        ref={recentRef}
      >
        Recent
      </div>
      <div className="mt-6">
        <DataGriddy />
      </div>
    </div>
  );
};

export default AHome;
