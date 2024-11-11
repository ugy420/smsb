import React, { useState, useEffect } from 'react';
import { useUser } from '../components/userprovider';
import Footer from './footer';

const MyBooking = () => {
  const { user } = useUser(); // Get user ID from context
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/getBookingU/${user}`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBookings(); // Fetch bookings only if user ID is available
    }
  }, [user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const cancelBooking = async (booking) => {
    try {
      const bookingDate = new Date(booking.booking_date);
  
      // Add one day
      bookingDate.setDate(bookingDate.getDate() + 1);
  
      const formattedBooking = {
        ...booking,
        booking_date: bookingDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      };
      
      console.log(formattedBooking); // Check the new formatted date
      const response = await fetch('http://localhost:3001/api/delBooking', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedBooking),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        fetchBookings();
        alert(data.message); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900">My Bookings</h1>
      <div className="max-w-4xl mx-auto mt-8 px-4 flex-grow">
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={`${booking.ground_id}-${booking.booking_date}-${booking.booking_time}`} className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{booking.ground_name}</h3>
                  <p className="text-lg text-gray-600 mt-2">Date: {formatDate(booking.booking_date)}</p>
                  <p className="text-lg text-gray-600 mt-2">Time: {booking.booking_time}</p>
                  <p className="text-lg text-gray-600 mt-2">Location: {booking.name}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => cancelBooking(booking)}
                      className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No bookings found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;
