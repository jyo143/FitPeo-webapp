
import React from 'react';
import { navigationLinks } from '../data/navigationData';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {navigationLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={`nav-link ${link.active ? 'active' : ''}`}
            >
              <link.icon size={20} />
              <span>{link.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
