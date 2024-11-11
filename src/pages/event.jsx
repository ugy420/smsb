import React, { useState, useEffect } from 'react';

const AEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [groundsData, setGroundsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [newEvent, setNewEvent] = useState({ name: '', description: '', img_slot: null, grnId: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsResponse = await fetch('http://localhost:3001/api/getevents');
        if (eventsResponse.ok) {
          const events = await eventsResponse.json();
          const formattedEvents = events.map((event) => {
            const image = require(`../assets/${event.img_slot}`);
            return {
              ...event,
              image,
            };
          });
          setEventsData(formattedEvents);
        } else {
          console.error('Failed to fetch events data');
          setError('Failed to fetch events data');
        }

        const groundsResponse = await fetch('http://localhost:3001/api/allGround');
        if (groundsResponse.ok) {
          const grounds = await groundsResponse.json();
          setGroundsData(grounds);
        } else {
          console.error('Failed to fetch grounds data');
          setError('Failed to fetch grounds data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(`http://localhost:3001/api/deleteEvent/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setEventsData(eventsData.filter(event => event.id !== id));
          setMessage("Event deleted successfully.");
        } else {
          console.error(`Failed to delete event ${id}`);
          setMessage("Failed to delete event.");
        }
      } catch (error) {
        console.error('Error deleting event:', error);
        setMessage("Error deleting event.");
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewEvent({ ...newEvent, img_slot: file });
  };

  const handleAddEvent = async (event) => {
    event.preventDefault();
    if (!newEvent.img_slot) {
      setMessage("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append('name', newEvent.name);
    formData.append('description', newEvent.description);
    formData.append('img_slot', newEvent.img_slot);
    formData.append('grnId', parseInt(newEvent.grnId, 10));

    try {
      const response = await fetch('http://localhost:3001/api/addEvent', {
        method: 'POST',
        body: formData,
      });
      console.log(formData);
      if (response.ok) {
        const addedEvent = await response.json();
        setEventsData([...eventsData, addedEvent]);
        setMessage("New event added successfully.");
        setShowForm(false);
      } else {
        setMessage("Failed to add new event.");
      }
    } catch (error) {
      setMessage("Error adding new event.");
    }
  };

  if (loading) {
    return <div className="container mx-auto p-28">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-28 text-red-600">{error}</div>;
  }

  const getGroundNameById = (groundId) => {
    const ground = groundsData.find((g) => g.id === groundId);
    return ground ? ground.name : 'Unknown Ground';
  };

  return (
    <div className="container mx-auto p-28">
      <h1 className="text-2xl font-bold mb-4">Events List</h1>

      {message && <div className="mb-4 p-2 text-green-600">{message}</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {/* Button to show form */}
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>

        {/* Only show this button when the form is visible */}
        {showForm && (
          <button
            onClick={handleAddEvent}
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        )}
      </div>

      {/* Form to add new event */}
      {showForm && (
        <form onSubmit={handleAddEvent} className="mb-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              className="border border-gray-300 p-2 rounded w-full mb-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Description:</label>
            <textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="border border-gray-300 p-2 rounded w-full mb-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Image:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 rounded w-full mb-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Select Ground:</label>
            <select
              value={newEvent.grnId}
              onChange={(e) => setNewEvent({ ...newEvent, grnId: e.target.value })}
              className="border border-gray-300 p-2 rounded w-full mb-2"
              required
            >
              <option value="">Select a ground</option>
              {groundsData.map((ground) => (
                <option key={ground.id} value={ground.id}>
                  {ground.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      )}

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Ground Name</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.length > 0 ? (
            eventsData.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{event.name}</td>
                <td className="border border-gray-300 p-2">{event.description}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <img src={event.image} className="w-20 h-20 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {getGroundNameById(event.grnId)}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete&nbsp;&nbsp;&nbsp;
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AEvents;