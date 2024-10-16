import React from "react";
import ReactStars from "react-rating-stars-component";
import "../../styles/RatePost.css";
import useAddRateHook from "../../Hook/review/add-rate-hook";

const RatePost = () => {
  const { rateText, rateValue, HandleRateText, HandleRateValue, user, onSubmit } =
    useAddRateHook();

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
    onChange: (newValue) => {
      HandleRateValue(newValue);
    },
  };

  return (
    <div className="rate-post">
      <div className="rate-post-header">
        <h3>{user.name}</h3>
        <ReactStars {...settings} />
      </div>
      <textarea
        value={rateText}
        onChange={HandleRateText}
        className="rate-post-comment"
        placeholder="Write your comment here..."
      ></textarea>
      <button onClick={onSubmit} className="rate-post-button">Add Rate</button>
    </div>
  );
};

export default RatePost;
