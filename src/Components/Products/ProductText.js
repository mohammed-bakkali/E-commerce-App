import React from "react";
import "../../styles/ProductText.css";
import { useNavigate } from "react-router-dom";

const ProductText = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/products');
  };

  return (
    <div className="product-info">
      <h1 className="product-title">Black Automatic Jacket</h1>
      <p className="product-category">Accessories</p>
      <div className="product-colors">
        <span className="color-option" style={{ backgroundColor: "#000" }}></span>
        <span className="color-option" style={{ backgroundColor: "#555" }}></span>
        <span className="color-option" style={{ backgroundColor: "#777" }}></span>
      </div>
      <h3 className="Specifications">Specifications:</h3>
      <p className="product-description">
        This stylish black automatic jacket is perfect for any occasion. Made with high-quality materials, it ensures comfort and durability.
        This stylish black automatic jacket is perfect for any occasion. Made with high-quality materials, it ensures comfort and durability.
        This stylish black automatic jacket is perfect for any occasion. Made with high-quality materials, it ensures comfort and durability.
        This stylish black automatic jacket is perfect for any occasion. Made with high-quality materials, it ensures comfort and durability.
      </p>
      <div className="price-section">
        <span className="price">$169.99</span>
        <span className="original-price">$199.99</span>
      </div>
      <div className="rating">
        <span className="rating-value">4.9</span> (98 reviews)
      </div>
      <button className="add-to-cart">Add to Cart</button>
      <button className="back-to-products" onClick={handleBackClick}>Back to Products</button>
    </div>
  );
};

export default ProductText;
