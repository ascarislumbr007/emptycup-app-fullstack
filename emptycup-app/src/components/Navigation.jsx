
import React from 'react';
import './Navigation.css';
import { IoIosContact, IoMdImages, IoMdMap, IoMdSwap } from 'react-icons/io'; 
import { FaBookmark, FaHeart } from 'react-icons/fa'; 

function Navigation({ isShortlistFilterActive, onToggleShortlistFilter }) {
  const navItems = [
    { icon: IoIosContact, text: 'Contacts', type: 'general', active: true },
    { icon: IoMdImages, text: 'Gallery', type: 'general', active: false },
    { icon: IoMdMap, text: 'Map', type: 'general', active: false },
    
    {
      icon: FaBookmark, 
      text: 'Shortlisted',
      type: 'filter',
      active: isShortlistFilterActive, 
      onClick: onToggleShortlistFilter, 
      filledIcon: FaHeart 
    },
    { icon: IoMdSwap, text: 'Sort', type: 'general', active: false },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${item.active ? 'active' : ''}`}
          onClick={item.onClick} 
        >
          {item.type === 'filter' && item.active ? ( 
            <item.filledIcon className="nav-icon" />
          ) : (
            <item.icon className="nav-icon" /> 
          )}
          <span className="nav-text">{item.text}</span>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;