import React, { useState } from 'react';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe', // Example name
    email: 'john.doe@example.com', // Example email
    phone: '123-456-7890', // Example phone
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Your Account</h2>
      <div className="flex flex-col items-center mb-6">
        {formData.profilePicture ? (
          <img
            src={formData.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-blue-500 mb-4"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Profile Details</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full p-2 border ${isEditing ? 'border-blue-300' : 'bg-gray-200'} rounded-md`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full p-2 border ${isEditing ? 'border-blue-300' : 'bg-gray-200'} rounded-md`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full p-2 border ${isEditing ? 'border-blue-300' : 'bg-gray-200'} rounded-md`}
            />
          </div>
          {isEditing ? (
            <div className="flex justify-between">
              <button
                type="button"
                onClick={toggleEdit}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={toggleEdit}
                className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition ml-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={toggleEdit}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
