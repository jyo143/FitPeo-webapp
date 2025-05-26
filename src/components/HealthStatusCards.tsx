
import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = ({ data }) => {
  return (
    <div className="health-status-cards">
      {data.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-card-header">
            <span className="health-icon">{item.icon}</span>
            <h3 className="health-title">{item.title}</h3>
          </div>
          <p className="health-date">Date: {item.date}</p>
          <div className="health-progress">
            <div 
              className="progress-bar"
              style={{ 
                width: `${item.progress}%`,
                backgroundColor: item.color 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
