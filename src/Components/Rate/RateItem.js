import React from "react";
import "../../styles/RateItem.css";
import rate from "../../assets/images/rate.png";

const RateItem = () => {
  return (
    <div className="rate-item">
      <div className="rate-item-header">
        <div>Mohammed</div>
        <img src={rate} alt="Rating" height="16px" width="16px" />
        <div className="rate-value">4.3</div>
      </div>

      <div className="rate-description">
        A product that is reasonably priced for the time being. It has a very good face and comes with an extra arm.
      </div>
    </div>
  );
};

export default RateItem;
