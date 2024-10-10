import React from 'react';
import "../../styles/UserAllOrderCard.css"; 
import jacket1 from "../../assets/images/products/jacket-1.jpg";
const UserAllOrderCard = () => {
  return (
    <div className="cart-order">
      <div className="order-details">
        <img src={jacket1} alt="Product" className="order-image" />
        <div className="order-info">
          <p className="order-brand">Brand: Apple</p>
          <h4 className="order-name">Découvrez l'iPhone XR Noir 128 Go reconditionné en bonne occasion au Maroc, un smartphone Apple élégant  </h4>
          <p className="order-rating">Rating: 4.5</p>
          <div className="order-color">
            <span className="color-swatch"></span>
          </div>
          <input type="number" placeholder="Quantity" className="quantity-input" />
        </div>
      </div>
    </div>
  );
}

export default UserAllOrderCard;
