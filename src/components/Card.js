import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header"></div>
      <div className="card-body">
        <p class="card-body-details">
          5h ago<span class="card-body-details-oval"></span>Full Time
        </p>
        <h3 class="card-body-position">Senior Software Engineer</h3>
        <p class="card-body-details">Scoot</p>
      </div>
      <div className="card-footer">
        <h4 class="job-card-location">United Kingdom</h4>
      </div>
    </div>
  );
};

export default Card;
