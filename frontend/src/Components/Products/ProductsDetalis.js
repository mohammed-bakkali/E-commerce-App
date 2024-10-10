import React from "react";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import "../../styles/ProductsDetails.css";

const ProductsDetalis = () => {
  return (
    <div className="product-details-container">
      <div className="product-gallery-container">
        <ProductGallery />
      </div>
      <div className="product-text-container">
        <ProductText  />
      </div>
    </div>
  );
};

export default ProductsDetalis;
