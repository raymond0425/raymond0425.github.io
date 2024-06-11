import React from 'react';
import './Project.css';

const Project = ({ title, description, image, link }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
      </div>
    </div>
  );
}

export default Project;
