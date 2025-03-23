import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'

export const Aside = () => {
  return (
    <aside className="aside">
      <nav className="aside-nav">
        <div className="nav-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
        <div className="nav-section">
          <h3>Quick Actions</h3>
          <ul>
            <li><Link to="/new">New Item</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/recent">Recent</Link></li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
