import React from 'react';
import "../../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default Spinner;
