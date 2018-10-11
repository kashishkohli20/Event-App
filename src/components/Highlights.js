import React from 'react';
import HighlightsDescription from './HighlightsDescription';
import HighlightsDiscount from './HighlightsDiscount';

const Highlights = () => {
  return (
    <div className="highlights-wrapper">
      <HighlightsDescription />
      <HighlightsDiscount />
    </div>
  );
};

export default Highlights;