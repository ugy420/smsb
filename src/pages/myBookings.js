import React, { useState, useEffect } from 'react';
import { useUser } from '../components/userprovider'; // Assuming you have user context

const MyBooking = () => {
  const { user } = useUser(); // Get user ID from context
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/getBookingU/${user}`);
        const data = await response.json();
        setBookings(data); // Set the bookings data
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (user) {
      fetchBookings(); // Fetch bookings only if user ID is available
    }
  }, [user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const cancelBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/cancelBooking/${bookingId}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        setBookings(bookings.filter((booking) => booking.id !== bookingId)); // Remove the canceled booking
        alert(data.message); // Show success message
      } else {
        alert(data.message); // Show error message if booking not found or cancellation failed
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900">My Bookings</h1>
      <div className="max-w-4xl mx-auto mt-8 px-4">
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{booking.ground}</h3>
                  <p className="text-lg text-gray-600 mt-2">Date: {formatDate(booking.booking_date)}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => cancelBooking(booking.id)}
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
    </div>
  );
};

export default MyBooking;