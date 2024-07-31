import React from "react";
import "../../styles/BrandCard.css"

const BrandCard = ({ img }) => {
  return (
    <div className="brands">
      <div className="brand">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BrandCard;
