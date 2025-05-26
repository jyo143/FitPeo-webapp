import React from "react";
import { Search, Bell, Plus } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
        </button>
        <div className="user-profile">
          <img src="/human.png" alt="User Avatar" className="user-avatar" />
        </div>
        <button className="add-btn">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
