import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link className="card-container">
      <div
        className="card-header"
        style={{
          backgroundColor: card.logoBackground,
          backgroundImage: `url(${card.logo})`,
          backgroundPosition: "center",
          backgroundSize: "45px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="card-body">
        <p className="card-body-details">
          {card.postedAt}
          <span className="card-body-details-oval"></span>
          {card.contract}
        </p>
        <h3 className="card-body-position">{card.position}</h3>
        <p className="card-body-details">{card.company}</p>
      </div>
      <div className="card-footer">
        <h4 className="job-card-location">{card.location}</h4>
      </div>
    </Link>
  );
};

export default Card;
//    "company": "Scoot",
// "logo": "/assets/logos/scoot.svg",
// "logoBackground": "hsl(36, 87%, 49%)",
// "position": "Senior Software Engineer",
// "postedAt": "5h ago",
// "contract": "Full Time",
// "location": "United Kingdom",
