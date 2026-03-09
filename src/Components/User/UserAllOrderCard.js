import React from "react";
import "../../styles/UserAllOrderCard.css";
import { Link } from "react-router-dom";

const UserAllOrderCard = ({ cartItem }) => {
  const imageUrl = cartItem.product.imageCover
    ? `http://127.0.0.1:8000/products/${cartItem.product.imageCover}`
    : "default-image-url.png";

  return (
    <div className="order-product-row">
      {/* Image */}
      <Link to={`/products/${cartItem.product._id}`}>
        <img src={imageUrl} alt={cartItem.product.title} className="order-product-img" />
      </Link>

      {/* Info */}
      <div className="order-product-info">
        <Link to={`/products/${cartItem.product._id}`} style={{ textDecoration: "none" }}>
          <div className="order-product-name">{cartItem.product.title}</div>
        </Link>
        <div className="order-product-meta">
          {cartItem.product.brand?.name && (
            <span className="order-product-brand">{cartItem.product.brand.name}</span>
          )}
          {cartItem.product.ratingsAverage && (
            <span className="order-product-rating">★ {cartItem.product.ratingsAverage}</span>
          )}
          <span className="order-product-qty">Qty: {cartItem.count}</span>
          {cartItem.color && (
            <span
              className="order-color-swatch"
              style={{ backgroundColor: cartItem.color }}
              title={cartItem.color}
            />
          )}
        </div>
      </div>

      {/* Price */}
      <div className="order-product-price">${cartItem.price}</div>
    </div>
  );
};

export default UserAllOrderCard;