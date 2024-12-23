import React from 'react';
import './Card.css';

const Card = ({ title, company, location, description }) => {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default Card;
