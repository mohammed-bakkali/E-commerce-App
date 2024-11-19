import React from 'react';
import prev from '../../assets/images/prev.png';

const RightButton = ({ onClick, disabled }) => {
  return (
    <button
      className="gallery-button right-button"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={prev} alt="Previous" />
    </button>
  );
};

export default RightButton;
