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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Your Account</h2>
        <div className="flex flex-col items-center mb-6">
          {formData.profilePicture ? (
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-600 mb-4 object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-blue-600 flex items-center justify-center mb-4 bg-gray-200">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 border border-blue-600 rounded-md p-1 bg-white text-blue-600 cursor-pointer"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Profile Details</h3>
          <form>
            {['name', 'email', 'phone'].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-gray-700 font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`mt-1 block w-full p-2 border rounded-md ${isEditing ? 'border-blue-300' : 'bg-gray-200'}`}
                />
              </div>
            ))}
            <div className="flex justify-between mt-6">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-200"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
