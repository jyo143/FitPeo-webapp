import React from "react";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <button>This Week</button>
          </div>
          <AnatomySection />
          <ActivityFeed />
        </div>
        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
