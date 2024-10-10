import React from "react";
import "../../styles/PaymentMethodPage.css";
const ChoosPayMethoud = () => {
  return (
    <>
      <div className="payment-method-container">
        <h1 className="page-title">Choose a Payment Method</h1>
        <div className="payment-options">
          <div className="payment-option">
            <input type="radio" id="credit-card" name="payment-method" />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="payment-option">
            <input type="radio" id="paypal" name="payment-method" />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="payment-option">
            <input type="radio" id="bank-transfer" name="payment-method" />
            <label htmlFor="bank-transfer">Bank Transfer</label>
          </div>
          <div className="payment-option">
            <input type="radio" id="cash-on-delivery" name="payment-method" />
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </div>
        </div>
        <button className="confirm-button">Confirm Payment Method</button>
      </div>
    </>
  );
};

export default ChoosPayMethoud;
