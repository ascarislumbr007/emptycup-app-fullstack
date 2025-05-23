// src/components/Navigation.jsx
import React from 'react';
import './Navigation.css';
import { IoIosContact, IoMdImages, IoMdMap, IoMdSwap } from 'react-icons/io'; // Icons starting with Io from 'io'
import { FaBookmark, FaHeart } from 'react-icons/fa'; // Icons starting with Fa from 'fa'
// Accept new props: isShortlistFilterActive and onToggleShortlistFilter
function Navigation({ isShortlistFilterActive, onToggleShortlistFilter }) {
  const navItems = [
    { icon: IoIosContact, text: 'Contacts', type: 'general', active: true },
    { icon: IoMdImages, text: 'Gallery', type: 'general', active: false },
    { icon: IoMdMap, text: 'Map', type: 'general', active: false },
    // Update Shortlisted item:
    {
      icon: FaBookmark, // Default icon, will change in render
      text: 'Shortlisted',
      type: 'filter', // Indicate this is the filter item
      active: isShortlistFilterActive, // Active based on prop
      onClick: onToggleShortlistFilter, // Add click handler
      filledIcon: FaHeart // Icon for when filter is active
    },
    { icon: IoMdSwap, text: 'Sort', type: 'general', active: false },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${item.active ? 'active' : ''}`}
          onClick={item.onClick} // Apply onClick if present
        >
          {item.type === 'filter' && item.active ? ( // Render filled icon if filter is active
            <item.filledIcon className="nav-icon" />
          ) : (
            <item.icon className="nav-icon" /> // Render default icon
          )}
          <span className="nav-text">{item.text}</span>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;