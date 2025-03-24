import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by skills or experience..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          Search Developers
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 