import React, { useState, useEffect } from 'react';

const Grounds = () => {
  const [groundsData, setGroundsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [newGround, setNewGround] = useState({ name: '', img: null });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchGrounds = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/allGround');
        if (response.ok) {
          const data = await response.json();
          const formatGrounds = data.map((ground) => {
            const image = require(`../assets/${ground.img}`);
            return {
              ...ground,
              image,
            };
          });
          setGroundsData(formatGrounds);
        } else {
          console.error('Failed to fetch grounds data');
          setError('Failed to fetch grounds data');
        }
      } catch (error) {
        console.error('Error fetching grounds data:', error);
        setError('Error fetching grounds data');
      } finally {
        setLoading(false);
      }
    };

    fetchGrounds();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this ground?")) {
      try {
        const response = await fetch(`http://localhost:3001/api/deleteGround/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setGroundsData(groundsData.filter(ground => ground.id !== id));
          setMessage("Ground deleted successfully.");
        } else {
          console.error(`Failed to delete ground ${id}`);
          setMessage("Failed to delete ground.");
        }
      } catch (error) {
        console.error('Error deleting ground:', error);
        setMessage("Error deleting ground.");
      }
    }
  };

  const toggleStatus = async (id) => {
    const updatedGrounds = groundsData.map(ground => {
      if (ground.id === id) {
        const updatedGround = { ...ground, status: ground.status === 'Active' ? 'Unavailable' : 'Active' };
        return updatedGround;
      }
      return ground;
    });

    setGroundsData(updatedGrounds);

    try {
      // Send the updated status to the server
      const updatedGround = updatedGrounds.find(ground => ground.id === id);
      const response = await fetch(`http://localhost:3001/api/updateGround/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGround),
      });

      if (!response.ok) {
        console.error('Failed to update status in database');
        setMessage("Failed to update status.");
      }
    } catch (error) {
      console.error('Error updating status:', error);
      setMessage("Error updating status.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewGround({ ...newGround, img: file });
  };

  const handleAddGround = async (event) => {
    event.preventDefault();
    if (!newGround.img) {
      setMessage("Please upload an image.");
      return;
    }

    // Set status to 'Active' before submitting
    const formData = new FormData();
    formData.append('name', newGround.name);
    formData.append('status', 'Active');  // Always set status to 'Active'
    formData.append('img', newGround.img);

    try {
      const response = await fetch('http://localhost:3001/api/addGround', {
        method: 'POST',
        body: formData,
      });
      console.log(formData);
      if (response.ok) {
        const addedGround = await response.json();
        setGroundsData([...groundsData, addedGround]);
        setMessage("New ground added successfully.");
        setShowForm(false);
      } else {
        setMessage("Failed to add new ground.");
      }
    } catch (error) {
      setMessage("Error adding new ground.");
    }
  };

  if (loading) {
    return <div className="container mx-auto p-28">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-28 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-28">
      <h1 className="text-2xl font-bold mb-4">Sports Grounds List</h1>

      {message && <div className="mb-4 p-2 text-green-600">{message}</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {/* Button to show form */}
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Ground'}
        </button>

        {/* Only show this button when the form is visible */}
        {showForm && (
          <button
            onClick={handleAddGround}
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        )}
      </div>

      {/* Form to add new ground */}
      {showForm && (
        <form onSubmit={handleAddGround} className="mb-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={newGround.name}
              onChange={(e) => setNewGround({ ...newGround, name: e.target.value })}
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
        </form>
      )}

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groundsData.length > 0 ? (
            groundsData.map((ground) => (
              <tr key={ground.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{ground.name}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className={`ml-2 ${ground.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'} text-white px-4 py-2 rounded`}
                    onClick={() => toggleStatus(ground.id)}
                  >
                    {ground.status === 'Active' ? 'Active' : 'Unavailable'}
                  </button>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <img src={ground.image} alt={ground.name} className="w-20 h-20 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(ground.id)}
                  >
                    Delete&nbsp;&nbsp;&nbsp;
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">No grounds found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Grounds;
