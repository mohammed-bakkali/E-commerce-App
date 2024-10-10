import React from "react";
import "../../styles/CartItem.css"; 
import jacket1 from "../../assets/images/products/jacket-1.jpg";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={jacket1} alt="Product" className="item-image" />
        <div className="item-info">
          <p className="item-brand">Brand: Apple</p>
          <h4 className="item-name">Découvrez l'iPhone XR Noir 128 Go reconditionné en bonne occasion au Maroc, un smartphone Apple élégant  </h4>
          <p className="item-rating">Rating: 4.5</p>
          <div className="item-color">
            <span className="color-swatch"></span>
          </div>
          <input type="number" placeholder="Quantity" className="quantity-input" />
        </div>
      </div>
      <div className="item-actions">
        <div className="remove-item">Remove</div>
        <div className="item-price">3000 EGP</div>
      </div>
    </div>
  );
}

export default CartItem;
