
import React from 'react';
import { upcomingAppointments } from '../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      <div className="schedule-day">
        <h3 className="day-title">On Thursday</h3>
        <div className="appointments-grid">
          {upcomingAppointments.thursday.map((appointment, index) => (
            <SimpleAppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      </div>
      
      <div className="schedule-day">
        <h3 className="day-title">On Saturday</h3>
        <div className="appointments-grid">
          {upcomingAppointments.saturday.map((appointment, index) => (
            <SimpleAppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
