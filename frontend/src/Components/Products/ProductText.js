import React from "react";
import "../../styles/ProductText.css";
import { useNavigate, useParams } from "react-router-dom";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";

const ProductText = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  // Extract the id from the URL
  const { id } = useParams();
  // Fetch product details using hook
  const { item, cat, brand } = useViewProductsDetailsHook(id);

  return (
    <div className="product-info-details">
      <h1 className="product-title">{item?.title || "Product Name"}</h1>
      
      <p className="product-category">{cat.name}:</p>
      <h3 className="Specifications">Description:</h3>
      <p className="product-description">
        {item?.description || "No description available for this product."}
      </p>
      <div className="price-section">
        <span className="price">${item?.price || "0.00"}</span>
        {item?.originalPrice && (
          <span className="original-price">${item.originalPrice}</span>
        )}
      </div>
      <h3>Color:</h3>
      <div className="product-colors">
        {item.availableColors && item.availableColors.length > 0 ? (
          item.availableColors.map((color, index) => (
            <span
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
            ></span>
          ))
        ) : (
          <p>No colors available</p>
        )}
      </div>

      <p className="product-brand">Brand: {brand?.name || "Brand Name"}</p>

      <div className="rating">
        <span className="rating-value">{item.ratingsAverage || "0.0"} (customer reviews)</span>
        {/* {item.ratingsQuantity || "0"} reviews) */}
      </div>
      <button className="detail-add-to-cart">Add to Cart</button>
      <button className="detail-back-to-products" onClick={handleBackClick}>
        Back to Products
      </button>
    </div>
  );
};

export default ProductText;
