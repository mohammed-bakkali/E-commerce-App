import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ background, img, title }) => {
  return (
    <div className="category-card txt-c">
      <div className="category-item">
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>
      {/* <div className="features">
          <div className="feature-item">
            <img src={img} alt="Free Shipping" />
            <p>Free Shipping<br />Order above $1000</p>
          </div>
          <div className="feature-item">
            <img src={img} alt="Return & Refund" />
            <p>Return & Refund<br />Money Back Guarenty</p>
          </div>
          <div className="feature-item">
            <img src={img} alt="Member Discount" />
            <p>Member Discount<br />On every Order</p>
          </div>
          <div className="feature-item">
            <img src={img} alt="Customer Support" />
            <p>Customer Support<br />Every Time Call Support</p>
          </div>
        </div> */}
    </div>
  );
};

export default CategoryCard;
