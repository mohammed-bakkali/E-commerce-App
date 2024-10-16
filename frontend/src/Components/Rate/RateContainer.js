import React from "react";
import rate from "../../assets/images/rate.png";
import RateItem from "./RateItem";
import "../../styles/RateContainer.css";
import RatePost from "./RatePost";
import Pagination from "../Uitilys/Pagination";

const RateContainer = ({ rateAvg, rateQty }) => {
  return (
    <div className="rate">
      <div className="rate-header">
        <div className="rate-title">Ratings</div>
        <div className="rate-header-right">
          <img src={rate} alt="Rating" />
          <div className="rate-value">{rateAvg}</div>
          <div className="evaluation-count">({`${rateQty} evaluations`})</div>
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
      <Pagination />
    </div>
  );
};

export default RateContainer;
