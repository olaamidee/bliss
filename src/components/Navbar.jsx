import React, { useState } from 'react'
import { FaHome, FaUser, FaEnvelope, FaTimes, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-red-800 hover:text-red-600 transition-colors duration-300">
              Bliss
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300">
              <FaUser className="mr-2" />
              About
            </Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300">
              <FaEnvelope className="mr-2" />
              Contact
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-800 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link to="/" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300 px-3 py-2 rounded-md">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300 px-3 py-2 rounded-md">
              <FaUser className="mr-2" />
              About
            </Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300 px-3 py-2 rounded-md">
              <FaEnvelope className="mr-2" />
              Contact
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-red-800 transition-colors duration-300 px-3 py-2 rounded-md">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar