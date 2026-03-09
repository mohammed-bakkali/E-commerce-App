import React, { useState } from "react";
import "../../styles/PaymentMethodPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import useViewAddressHook from "../../Hook/user/view-address-hook";
import useOrderPayCashHook from "../../Hook/checkout/order-pay-cash-hook";
import useOrderPayCardHook from "../../Hook/checkout/order-pay-card-hook";
import { toast } from "react-toastify";

const payMethods = [
  { id: "cash", icon: faCashRegister, label: "Cash on Delivery" },
  { id: "card", icon: faCreditCard,   label: "Credit / Visa"    },
];

const ChoosePayMethod = () => {
  const { response } = useViewAddressHook();
  const { handleChooseAddress, addressDetails, handleCreateOrderCash } = useOrderPayCashHook();
  const { handleCreateOrderCard } = useOrderPayCardHook(addressDetails);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePay = () => {
    if (selectedMethod === "card")       handleCreateOrderCard();
    else if (selectedMethod === "cash")  handleCreateOrderCash();
    else toast.warn("Please select a payment method");
  };

  const addresses = response?.data?.data || [];

  return (
    <div className="payment-method-content">
      <h2 className="payment-page-title">Checkout</h2>
      <p className="payment-page-sub">Choose your payment method and shipping address</p>

      {/* Payment options */}
      <p className="payment-section-label">Payment Method</p>
      <div className="payment-methods">
        {payMethods.map(({ id, icon, label }) => (
          <div
            key={id}
            className={`payment-option ${selectedMethod === id ? "active" : ""}`}
            onClick={() => setSelectedMethod(id)}
          >
            <FontAwesomeIcon icon={icon} className="pay-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <hr className="payment-divider" />

      {/* Address */}
      <p className="payment-section-label">Shipping Address</p>
      <select
        className="payment-address-select"
        onChange={handleChooseAddress}
        defaultValue=""
      >
        <option value="" disabled>Select a shipping address</option>
        {addresses.length > 0 ? (
          addresses.map((item) => (
            <option key={item._id} value={item._id}>{item.alias}</option>
          ))
        ) : (
          <option disabled>No addresses found — please add one first</option>
        )}
      </select>

      {/* Confirm */}
      <button
        className="btn-confirm-pay"
        onClick={handlePay}
        disabled={!selectedMethod || !addressDetails}
      >
        Confirm & Place Order
      </button>
    </div>
  );
};

export default ChoosePayMethod;