import React, { useState, useEffect, useRef } from 'react'; 
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
  const [bookingCount, setBookingCount] = useState(null); // Add state for booking count

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

    const fetchBookingCount = async () => { // Fetch booking count
      try {
        const response = await fetch('http://localhost:3001/api/getBooksCount');
        if (response.ok) {
          const data = await response.json();
          setBookingCount(data.count);
        } else {
          console.error('Failed to fetch booking count');
        }
      } catch (error) {
        console.error('Error fetching booking count:', error);
      }
    };

    fetchUserCount();
    fetchGroundCount();
    fetchEventCount();
    fetchBookingCount(); // Call the fetch function for booking count
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
            number={userCount !== null ? userCount : 'Loading...'}
            BgColor="bg-red-600"
            numberTextColor="text-red-600"
            onClick={() => navigate('/members')}
          />
          <InfoCard
            icon={groundsIcon}
            title="Grounds"
            number={groundCount !== null ? groundCount : 'Loading...'}
            BgColor="bg-green-600"
            numberTextColor="text-green-600"
            onClick={() => navigate('/grounds')}
          />
          <InfoCard
            icon={bookingsIcon}
            title="Event"
            number={eventCount !== null ? eventCount : 'Loading...'}
            BgColor="bg-yellow-500"
            numberTextColor="text-yellow-500"
            onClick={() => navigate('/aevents')}
          />
        </div>
      </div>

      <div 
        className="mt-10 bg-blue-600 p-5 text-center text-white font-bold text-lg rounded"
        ref={recentRef}
      >
        Recent Bookings {/* Display booking count */}
      </div>
      <div className="mt-6">
        <DataGriddy/>
      </div>
    </div>
  );
};

export default AHome;
