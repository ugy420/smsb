import React, { useState, useEffect } from 'react';

const MembersPage = () => {
  const [membersData, setMembersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getMembers');
        if (response.ok) {
          const data = await response.json();
          setMembersData(data);
        } else {
          console.error('Failed to fetch members');
          setError('Failed to fetch members');
        }
      } catch (error) {
        console.error('Error fetching members:', error);
        setError('Error fetching members');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        const response = await fetch(`http://localhost:3001/api/deleteUser/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setMembersData(membersData.filter(member => member.id !== id));
          setMessage("Member deleted successfully.");
        } else {
          console.error(`Failed to delete member ${id}`);
          setMessage("Failed to delete member.");
        }
      } catch (error) {
        console.error('Error deleting member:', error);
        setMessage("Error deleting member.");
      }
    }
  };

  const filteredMembers = membersData.filter((member) => {
    return (
      member.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.Phone.includes(searchQuery)
    );
  });

  return (
    <div className="container mx-auto p-28">
      <h1 className="text-2xl font-bold mb-4">Members List</h1>

      {message && <div className="mb-4 p-2 text-green-600">{message}</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <input
        type="text"
        placeholder="Search by name, email, or phone"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2" align="center">{member.Name}</td>
                  <td className="border border-gray-300 p-2" align="center">{member.Email}</td>
                  <td className="border border-gray-300 p-2" align="center">{member.Phone}</td>
                  <td className="border border-gray-300 p-2" align="center">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(member.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">No members found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MembersPage;
