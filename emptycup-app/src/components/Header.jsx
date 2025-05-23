// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { BsThreeDotsVertical } from 'react-icons/bs'; // For the three dots menu

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Placeholder for the logo */}
        <div className="logo-placeholder">
        <img src="/images/logo-small.png" alt="Logo" />{/* You can replace this with an actual logo image */}
        </div>
        <h1 className="header-title">EmptyCup</h1>
      </div>
      <div className="header-right">
        <BsThreeDotsVertical className="menu-icon" />
      </div>
    </header>
  );
}

export default Header;