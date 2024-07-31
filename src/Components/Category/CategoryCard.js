import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ background, img, title }) => {
  return (
    <div className="category-card txt-c">
      <div className="category-item">
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>

    </div>
  );
};

export default CategoryCard;
