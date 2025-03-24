import React from 'react';
import { FaRocket, FaUsers, FaCode, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-red-800">Bliss</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connecting Solana developers with innovative projects
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Bliss is dedicated to revolutionizing the Solana ecosystem by connecting talented developers with groundbreaking projects.
            We believe in fostering innovation and building the future of decentralized applications.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FaRocket className="h-12 w-12 text-red-800 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Fast Development</h3>
            <p className="mt-2 text-gray-500">
              Connect with experienced developers to accelerate your project's development timeline.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FaUsers className="h-12 w-12 text-red-800 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Expert Network</h3>
            <p className="mt-2 text-gray-500">
              Access a curated network of skilled Solana developers and blockchain experts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FaCode className="h-12 w-12 text-red-800 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Quality Code</h3>
            <p className="mt-2 text-gray-500">
              Ensure high-quality, secure, and efficient code through our vetted developer network.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FaShieldAlt className="h-12 w-12 text-red-800 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Secure Platform</h3>
            <p className="mt-2 text-gray-500">
              Work with confidence on our secure platform with built-in verification and escrow.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Join our platform and connect with the best Solana developers
            </p>
            <div className="mt-6">
              <button className="bg-red-800 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 