import React from "react";
import discount from "../../assets/images/discount.png";
import "../../styles/DiscountSection.css";

const DiscountSection = () => {
  return (
    <div className="container">
      <div className="container-discount mt-20">
        <div className="discount-content">
          <div className="discount-text">
            <p>100% Original Products</p>
            <h2>The All New Fashion Collection Items</h2>
            <p style={{color: "black"}}>Starting from: $59.99</p>
            <button className="shop-now mb-5">Shop now</button>
            <button className="subscrible">Subscrible</button>
          </div>
          <div className="discount-image">
            <img src={discount} alt="Fashion Collection" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
