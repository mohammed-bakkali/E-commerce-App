import React from "react";
import ReactStars from "react-rating-stars-component";
import "../../styles/RatePost.css";

const RatePost = () => {
  const settings = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 4.3,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };

  return (
    <div className="rate-post">
      <div className="rate-post-header">
        <h3>Rate This Product</h3>
        <ReactStars {...settings} />
      </div>
      <textarea
        className="rate-post-comment"
        placeholder="Write your comment here..."
      ></textarea>
      <button className="rate-post-button">Submit</button>
    </div>
  );
};

export default RatePost;
