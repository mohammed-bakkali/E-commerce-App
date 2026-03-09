import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, background, id }) => {
  return (
    <Link to={`/products/category/${id}`} style={{ textDecoration: "none" }}>
      <div className="category-card">
        <div className="category-item" style={{ backgroundColor: background }}>
          <img src={img} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;