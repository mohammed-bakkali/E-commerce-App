import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, background, id }) => {
  console.log(id)
  return (
    <div className="category-card txt-c" >
      <div className="category-item"  style={{ backgroundColor: `${background}` }}>
      <Link to={`/products/category/${id}`}>
        <img src={img} alt={title} />
      </Link>
        
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
