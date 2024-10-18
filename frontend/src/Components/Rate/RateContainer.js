import React from "react";
import rate from "../../assets/images/rate.png";
import RateItem from "./RateItem";
import "../../styles/RateContainer.css";
import RatePost from "./RatePost";
import Pagination from "../Uitilys/Pagination";
import useViewAllReviewHook from "../../Hook/review/view-all-review-hook";
import { useParams } from "react-router-dom";

const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();
  const { loading, allReview, onPageChange } = useViewAllReviewHook(id);

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
      </div>
      <Pagination />
    </div>
  );
};

export default RateContainer;
