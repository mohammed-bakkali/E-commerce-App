import React from "react";
import "../../styles/RateItem.css";
import rate from "../../assets/images/rate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const RateItem = ({ review, onEdit, onDelete }) => {
  return (
    <div className="rate-item">
      <div className="rate-item-name">
        <div>{review.user.name || "Unknown User"}</div>
        <div className="rate-item-rating">
          <img src={rate} alt="Rating" height="16px" width="16px" />
          <div className="rate-value">{review.rating || "N/A"}</div>
        </div>
      </div>
      <div className="rate-description">
        {review.review || "No description available."}
      </div>
      <div className="rate-actions">
        <FontAwesomeIcon
          icon={faEdit}
          className="icon edit-icon"
          onClick={() => onEdit(review.id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="icon delete-icon"
          onClick={() => onDelete(review.id)}
        />
      </div>
    </div>
  );
};

export default RateItem;
