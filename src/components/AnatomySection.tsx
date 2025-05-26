import React from "react";
import { healthStatusData } from "../data/healthData";
import HealthStatusCards from "./HealthStatusCards";
import "./AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-figure">
          <img
            src="/human.png"
            alt="Human Anatomy Full Body"
            className="anatomy-image"
          />
          <div className="health-indicators">
            <div className="indicator healthy-heart">
              <span className="indicator-label">❤️ Healthy Heart</span>
            </div>
            <div className="indicator healthy-leg">
              <span className="indicator-label">🦵 Healthy Leg</span>
            </div>
          </div>
        </div>
        <HealthStatusCards data={healthStatusData} />
      </div>
      <div className="activity-details">
        <button className="details-link">Details →</button>
      </div>
    </div>
  );
};

export default AnatomySection;
