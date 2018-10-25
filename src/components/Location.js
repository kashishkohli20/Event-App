import React from 'react';

const Location = () => {
  return (
    <div className="location-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3874432864404!2d88.34107581491072!3d22.564608085186862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779ff7e5b9af%3A0x1d1b1884bdbbbd79!2sEden+Gardens!5e0!3m2!1sen!2sin!4v1538741572232"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="location-tag">
        <div>Location</div>
      </div>
      
    </div>
  );
};

export default Location;