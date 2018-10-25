import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck-red">
      <Fade delay={500}>
        <div className="font-righteous footer-logo-venue">
          The Venue
        </div>
        <div className="footer-copyright">
          The Venue &copy;2018. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;