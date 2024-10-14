import React, { useState } from 'react';


const initialGroundsData = [
  { id: 1, name: 'Football Ground', description: 'Enjoy playing football in our well-maintained ground.', image: 'foot.jpg' },
  { id: 2, name: 'Volleyball Court', description: 'Join us for an exciting game of volleyball.', image: 'vo.jpg' },
  { id: 3, name: 'Basketball Court', description: 'Play basketball in our state-of-the-art facility.', image: 'bas.jpg' },
];

const Grounds = () => {
  const [groundsData, setGroundsData] = useState(initialGroundsData); // State for grounds data

  return (
    <div className="container mx-auto p-28 ">
      <h1 className="text-2xl font-bold mb-4">Sports Grounds List</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groundsData.map((ground) => (
            <tr key={ground.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{ground.name}</td>
              <td className="border border-gray-300 p-2">{ground.description}</td>
              <td className="border border-gray-300 p-2">
                <img src={require(`../assets/${ground.image}`)} alt={ground.name} className="w-20 h-20 object-cover" />
              </td>
              <td align="center"className="border border-gray-300 p-2">
                <button 
                  className="text-red-600 hover:text-red-800"
                >
                  Delete&nbsp;&nbsp;&nbsp;
                </button>
                <button className="text-green-300 hover:text-green-800">
                &nbsp;&nbsp;&nbsp;Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grounds;
