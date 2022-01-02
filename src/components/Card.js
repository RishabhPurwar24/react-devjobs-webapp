import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header"></div>
      <div className="card-body">
        <p className="card-body-details">
          5h ago<span className="card-body-details-oval"></span>Full Time
        </p>
        <h3 className="card-body-position">Senior Software Engineer</h3>
        <p className="card-body-details">Scoot</p>
      </div>
      <div className="card-footer">
        <h4 className="job-card-location">United Kingdom</h4>
      </div>
    </div>
  );
};

export default Card;
