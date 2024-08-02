import React from "react";
import rate from "../../assets/images/rate.png";
import RateItem from "./RateItem";
import "../../styles/RateContainer.css";
import RatePost from "./RatePost";

const RateContainer = () => {
  return (
    <div className="rate">
      <div className="rate-header">
        <div className="rate-title">Ratings</div>
        <div className="rate-header-right">
          <img src={rate} alt="Rating" />
          <div className="rate-value">4.4</div>
          <div className="evaluation-count">180 evaluations</div>
        </div>
      </div>

      <RatePost />

      <div className="rate-items">
        <RateItem />
        <RateItem />
        <RateItem />
        <RateItem />
        <RateItem />
      </div>
    </div>
  );
};

export default RateContainer;
