import React from "react";
import "../../styles/CartCheckout.css"
const CartCheckout = () => {
  return (
    <div class="checkout-container">
      <div class="coupon-section">
        <input class="coupon-input" placeholder="Discount Code" />
        <button class="coupon-btn">Apply</button>
      </div>
      <div class="product-price">34,000 EGP</div>
      <a href="/order/payment-method" class="checkout-link">
        <button class="checkout-btn">Complete Purchase</button>
      </a>
    </div>
  );
};

export default CartCheckout;
