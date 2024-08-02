import React from "react";
import "../../styles/CategoryHeader.css";

const CategoryHeader = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-item">All</div>
        <div className="header-item">Electronics</div>
        <div className="header-item">Clothes</div>
        <div className="header-item">Electricity</div>
        <div className="header-item">Games</div>
        <div className="header-item">Laptops</div>
        <div className="header-item">Others</div>
      </div>
    </div>
  );
};

export default CategoryHeader;
