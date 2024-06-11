import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onTransitionEnd }) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const video = document.getElementById('signature');
    if (video) {
      video.onended = () => {
        setTransition(true);
        setTimeout(onTransitionEnd, 2000); // Allow time for transition
      };
    }
  }, [onTransitionEnd]);

  return (
    <div className={`landing-page ${transition ? 'transition' : ''}`}>
      {!transition && (
        <video id="signature" autoPlay muted>
          <source src="/Signature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default LandingPage;
