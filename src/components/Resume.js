import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>
      <div className="pdf-container">
        <iframe src="/CV2.pdf" className="pdf-embed"></iframe>
      </div>
    </section>
  );
}

export default Resume;
