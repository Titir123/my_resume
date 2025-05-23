import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
