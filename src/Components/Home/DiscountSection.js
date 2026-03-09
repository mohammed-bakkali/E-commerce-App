import React from "react";
import { Link } from "react-router-dom";
import discount from "../../assets/images/discount.png";
import "../../styles/DiscountSection.css";

const DiscountSection = () => {
  return (
    <div className="container">
      <div className="container-discount">
        <div className="discount-content">

          {/* Text */}
          <div className="discount-text">
            <span className="discount-badge">✦ 100% Original Products</span>
            <h2>The All New Fashion<br />Collection Items</h2>
            <p className="discount-price">
              Starting from <strong>$59.99</strong>
            </p>
            <div className="discount-btns">
              <Link to="/products">
                <button className="shop-now">Shop Now</button>
              </Link>
              <button className="subscribe">Subscribe</button>
            </div>
          </div>

          {/* Image */}
          {/* <div className="discount-image">
            <img src={discount} alt="Fashion Collection" />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default DiscountSection;