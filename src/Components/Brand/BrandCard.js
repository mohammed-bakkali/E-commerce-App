import React from "react";
import "../../styles/BrandCard.css";
import { Link } from "react-router-dom";

const BrandCard = ({ img, title, id }) => {
  return (
    <div className="brands">
      <div className="brand">
        <Link to={`/products/brand/${id}`}>
          <img src={img} alt={title} />
      </Link>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default BrandCard;
