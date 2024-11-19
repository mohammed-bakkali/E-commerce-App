import React from 'react';
import next from '../../assets/images/next.png';

const LeftButton = ({ onClick, disabled }) => {
  return (
    <button
      className="gallery-button left-button"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={next} alt="Next" />
    </button>
  );
};

export default LeftButton;
