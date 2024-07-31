import React from "react";
import "../../styles/ProductsCard.css"
import jacket1 from "../../assets/images/products/jacket-1.jpg"

const ProductsCard = () => {
  return (
    <div className="product-card">
      <img src={jacket1} alt="Product" />
      <div className="between-flex">
      <h4>Black Automatic </h4>
      <h4 className="price">
        $169.99 
      </h4>

      </div>

      <p>Accessories</p>

      <div className="rating">
        <span>4.9</span> (98)
      </div>
    </div>
  );
};

export default ProductsCard;
