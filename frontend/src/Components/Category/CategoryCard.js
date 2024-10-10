import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ img, title, background }) => {
  return (
    <div className="category-card txt-c" >
      <div className="category-item"  style={{ backgroundColor: `${background}` }}>
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
