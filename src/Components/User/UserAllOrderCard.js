import React from 'react';
import "../../styles/UserAllOrderCard.css"; 
import { Link } from 'react-router-dom';

const UserAllOrderCard = ({ cartItem }) => {


  
  const imageUrl = cartItem.product.imageCover
    ? `http://127.0.0.1:8000/products/${cartItem.product.imageCover}`
    : "default-image-url.png";


  return (
    <div className="cart-order" >
      <div className="order-details">
      <Link to={`/products/${cartItem.product._id}`} style={{ textDecoration: "none" }}>
          <img  src={imageUrl} alt={cartItem.product.title} className="order-image"/>
        </Link>
        <div className="order-info">
        <h4 className="order-name">{cartItem.product.title}</h4>
          <p className="order-brand">Brand: {cartItem.product.title}</p>
          <p className="order-rating">Rating: {cartItem.product.ratingsAverage || 'N/A'}</p>
          <div className="order-color">
            <span className="color-swatch" style={{ backgroundColor: cartItem.color }}></span>
          </div>
          <input type="number" value={cartItem.count} className="quantity-input" readOnly/>
        </div>
      </div>
    </div>
  );
}

export default UserAllOrderCard;
