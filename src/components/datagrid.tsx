import React, { useState, useEffect } from 'react';

export default function DataGriddy() {
  const [bookings, setBookings] = useState([]);  // State initialized as an empty array
  const [loading, setLoading] = useState(true);  // Loading state
  const [message, setMessage] = useState('');  // State to hold notification message

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/allBookings');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setBookings(data);  // Store the fetched bookings
          } else {
            console.error('Data returned is not an array');
          }
        } else {
          console.error('Failed to fetch bookings');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchBookings();
  }, []);  // Empty dependency array to fetch data once on mount

  // Helper function to format the date
  const formatDate = (date: string) => {
    const newDate = new Date(date);  // Create a Date object from the string
    return newDate.toLocaleDateString();  // Format it as a date (e.g., "11/11/2024")
  };

  // Handle the delete action
  const handleDelete = async (booking) => {
    try {
      const bookingDate = new Date(booking.booking_date);

      // Add one day
      bookingDate.setDate(bookingDate.getDate() + 1);

      const formattedBooking = {
        ...booking,
        booking_date: bookingDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      };

      const response = await fetch('http://localhost:3001/api/delBooking', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedBooking),
      });

      const data = await response.json();

      if (response.ok) {
        // Directly update the bookings state by filtering out the deleted booking using the combination of ground_id, booking_date, and booking_time
        setBookings(bookings.filter((b) => 
          `${b.ground_id}-${b.booking_date}-${b.booking_time}` !== 
          `${booking.ground_id}-${booking.booking_date}-${booking.booking_time}`
        ));
        setMessage(`Booking for ${booking.user_name} has been successfully deleted.`);
      } else {
        setMessage(`Failed to delete booking: ${data.message}`);
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
      setMessage('An error occurred while deleting the booking.');
    }
  };

  return (
    <div className="overflow-x-auto">
      {/* Display the notification message */}
      {message && <div className="alert">{message}</div>}

      {loading ? (
        <p>Loading...</p>  // Show loading message while data is being fetched
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Ground</th>
              <th className="px-4 py-2 border-b">Booking Date</th>
              <th className="px-4 py-2 border-b">Booking Time</th>
              <th className="px-4 py-2 border-b">Action</th> {/* Add an extra column for delete button */}
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={`${booking.ground_id}-${booking.booking_date}-${booking.booking_time}`}>
                  <td className="px-4 py-2 border-b" align="center">{booking.user_name}</td>
                  <td className="px-4 py-2 border-b" align="center">{booking.ground_name}</td>
                  <td className="px-4 py-2 border-b" align="center">{formatDate(booking.booking_date)}</td>  {/* Display formatted date */}
                  <td className="px-4 py-2 border-b" align="center">{booking.booking_time}</td>
                  <td className="px-4 py-2 border-b" align="center">
                    <button
                      onClick={() => handleDelete(booking)}  // Pass the user_id (or booking_id) to delete
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} align="center">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
