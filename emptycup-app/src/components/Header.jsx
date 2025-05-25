
import React from 'react';
import './Header.css';
import { BsThreeDotsVertical } from 'react-icons/bs'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        { }
        <div className="logo-placeholder">
        <img src="/images/logo-small.png" alt="Logo" />{}
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