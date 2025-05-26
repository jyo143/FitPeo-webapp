import React from "react";
import "./ActivityFeed.css";

const ActivityFeed = () => {
  const activityData = [
    { day: "Mon", values: [20, 35, 25] },
    { day: "Tues", values: [35, 45, 30] },
    { day: "Wed", values: [25, 40, 35] },
    { day: "Thurs", values: [45, 30, 50] },
    { day: "Fri", values: [30, 55, 40] },
    { day: "Sat", values: [40, 25, 45] },
    { day: "Sun", values: [35, 50, 30] },
  ];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <span className="activity-summary">3 appointments on this week</span>
      </div>

      {/* <div className="activity-details">
        <button className="details-link">Details →</button>
      </div> */}

      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-column">
            <div className="line-chart">
              {item.values.map((value, i) => (
                <div
                  key={i}
                  className={`chart-line line-${i}`}
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
