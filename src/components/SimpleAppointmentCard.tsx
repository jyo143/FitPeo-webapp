
import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`simple-appointment-card ${appointment.type}`}>
      <div className="appointment-content">
        <span className="appointment-icon">{appointment.icon}</span>
        <div className="appointment-details">
          <h4 className="appointment-title">{appointment.title}</h4>
          <span className="appointment-time">{appointment.time}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
