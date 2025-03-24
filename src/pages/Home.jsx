import React, { useState } from 'react';
import DeveloperCard from '../components/DeveloperCard';
import SearchBar from '../components/SearchBar';
import { developers } from '../data/developers';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDevelopers = developers.filter(dev => 
    dev.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    dev.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dev.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Find Expert</span>
              <span className="block text-red-800">Solana Developers</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with experienced Rust developers specialized in Solana blockchain development
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/* Developers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((dev) => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Are you a Solana Developer?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Join our platform and connect with clients looking for your expertise
            </p>
            <div className="mt-6">
              <button className="bg-red-800 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
                Create Developer Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 