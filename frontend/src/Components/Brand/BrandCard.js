import React from "react";
import "../../styles/BrandCard.css";

const BrandCard = ({ img, title }) => {
  return (
    <div className="brands">
      <div className="brand">
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default BrandCard;
