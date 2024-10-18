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
  const {allReview, onPageChange } = useViewAllReviewHook(id);

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
        {allReview.data ? (
          allReview.data.map((review, index) => (
            <RateItem key={index} review={review} />
          ))
        ) : (
          <div>No reviews found.</div>
        )}
      </div>
      {allReview.paginationResult &&
      allReview.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          totalPages={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPageChange={onPageChange}
        />
      ) : null}
    </div>
  );
};

export default RateContainer;
