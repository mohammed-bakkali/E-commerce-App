import React from "react";
import "../../styles/RateItem.css";
import rate from "../../assets/images/rate.png";

const RateItem = ({ review }) => {
  return (
    <div className="rate-item">
      <div className="rate-item-header">
        <div>{review.user.name || "Unknown User"}</div>
        <img src={rate} alt="Rating" height="16px" width="16px" />
        <div className="rate-value">{review.rating || "N/A"}</div> 
      </div>
      <div className="rate-description">
        {review.review || "No description available."}
      </div>
    </div>
  );
};

export default RateItem;
