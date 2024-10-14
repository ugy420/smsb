import React, { useState } from 'react';

const initialMembersData = [
  { id: 1, name: 'Tashi Wangchuk', email: 'tashi.wangchuk@example.com', phone: '17812345' }, // B-Mobile
  { id: 2, name: 'Dorji Dema', email: 'dorji.dema@example.com', phone: '17923456' }, // TashiCell
  { id: 3, name: 'Sonam Tshering', email: 'sonam.tshering@example.com', phone: '17834567' }, // B-Mobile
  { id: 4, name: 'Karma Lhamo', email: 'karma.lhamo@example.com', phone: '17845678' }, // B-Mobile
  { id: 5, name: 'Pema Gyeltshen', email: 'pema.gyeltshen@example.com', phone: '17956789' }, // TashiCell
  { id: 6, name: 'Choden Phuntsho', email: 'choden.phuntsho@example.com', phone: '17867890' }, // B-Mobile
  { id: 7, name: 'Nima Sangye', email: 'nima.sangye@example.com', phone: '17978901' }, // TashiCell
  { id: 8, name: 'Lhamo Nawang', email: 'lhamo.nawang@example.com', phone: '17889012' }, // B-Mobile
  { id: 9, name: 'Ugyen Tshering', email: 'ugyen.tshering@example.com', phone: '17990123' }, // TashiCell
  { id: 10, name: 'Karma Tenzin', email: 'karma.tenzin@example.com', phone: '17801234' }, // B-Mobile
];

const MembersPage = () => {
  const [membersData, setMembersData] = useState(initialMembersData); // State for members data

  return (
    <div className="container mx-auto p-28 ">
      <h1 className="text-2xl font-bold mb-4">Members List</h1>
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
          {membersData.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{member.name}</td>
              <td className="border border-gray-300 p-2">{member.email}</td>
              <td className="border border-gray-300 p-2">{member.phone}</td>
              <th className="border border-gray-300 p-2">
                <button  
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;
