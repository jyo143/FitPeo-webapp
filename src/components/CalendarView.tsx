import React from "react";
import { calendarData } from "../data/calendarData";
import { healthStatusData } from "../data/healthData";
import "./CalendarView.css";

const CalendarView = () => {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  // Get lungs and teeth data
  const lungsData = healthStatusData.find((item) => item.title === "Lungs");
  const teethData = healthStatusData.find((item) => item.title === "Teeth");

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-controls">
          {/* <span className="calendar-period">This Week</span> */}
          <h2 className="calendar-month">October 2021</h2>
        </div>
      </div>

      {/* This Week Health Cards */}
      {/* <div className="this-week-cards">
        {lungsData && (
          <div className="health-week-card">
            <div className="health-card-header">
              <span className="health-icon">{lungsData.icon}</span>
              <h3 className="health-title">{lungsData.title}</h3>
            </div>
            <p className="health-date">Date: {lungsData.date}</p>
            <div className="health-progress">
              <div
                className="progress-bar"
                style={{
                  width: `${lungsData.progress}%`,
                  backgroundColor: lungsData.color,
                }}
              />
            </div>
          </div>
        )}

        {teethData && (
          <div className="health-week-card">
            <div className="health-card-header">
              <span className="health-icon">{teethData.icon}</span>
              <h3 className="health-title">{teethData.title}</h3>
            </div>
            <p className="health-date">Date: {teethData.date}</p>
            <div className="health-progress">
              <div
                className="progress-bar"
                style={{
                  width: `${teethData.progress}%`,
                  backgroundColor: teethData.color,
                }}
              />
            </div>
          </div>
        )}
      </div> */}

      <div className="calendar-grid">
        <div className="calendar-days-header">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.map((date, index) => (
            <div
              key={index}
              className={`date-cell ${date.isToday ? "today" : ""}`}
            >
              <span className="date-number">{date.day}</span>
              {date.appointments.map((appointment, i) => (
                <div key={i} className={`appointment-time ${appointment.type}`}>
                  {appointment.time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-info">
            <span className="appointment-icon">🦷</span>
            <div>
              <h4>Dentist</h4>
              <span className="appointment-time-text">09:00-11:00</span>
              <p className="doctor-name">Dr. Cameron Williamson</p>
            </div>
          </div>
        </div>

        <div className="appointment-card physiotherapy">
          <div className="appointment-info">
            <span className="appointment-icon">🏃</span>
            <div>
              <h4>Physiotherapy Appointment</h4>
              <span className="appointment-time-text">11:00-12:00</span>
              <p className="doctor-name">Dr. Kevin Djones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
