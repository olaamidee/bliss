import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <h1>Bliss</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <div className="nav-links">
            <a href="/" className="nav-link">
              <AiOutlineHome className="nav-icon" />
              <span>Home</span>
            </a>
            <a href="/add-friend" className="nav-link">
              <AiOutlineUserAdd className="nav-icon" />
              <span>Add Friend</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose className="nav-icon" />
          ) : (
            <HiMenuAlt3 className="nav-icon" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMenuOpen ? 'show' : ''}`}>
          <div className="mobile-links">
            <a href="/" className="nav-link">
              <AiOutlineHome className="nav-icon" />
              <span>Home</span>
            </a>
            <a href="/add-friend" className="nav-link">
              <AiOutlineUserAdd className="nav-icon" />
              <span>Add Friend</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav; 