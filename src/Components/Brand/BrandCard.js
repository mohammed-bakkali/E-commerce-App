import React from "react";
import "../../styles/BrandCard.css";
import { Link } from "react-router-dom";

const BrandCard = ({ img, title, id }) => {
  console.log("img",img)
  return (
    <Link to={`/products/brand/${id}`} style={{ textDecoration: "none" }}>
      <div className="brand-card">
        <div className="brand-img-wrap">
          <img src={img} alt={title} />
        </div>
        <p className="brand-name">{title}</p>
      </div>
    </Link>
  );
};

export default BrandCard;