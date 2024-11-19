import React, { useState } from "react";
import "../../styles/PaymentMethodPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import useViewAddressHook from "../../Hook/user/view-address-hook";
import useOrderPayCashHook from "../../Hook/checkout/order-pay-cash-hook";
import { toast } from "react-toastify";
import useOrderPayCardHook from "../../Hook/checkout/order-pay-card-hook";

const ChoosePayMethod = () => {
  const { response } = useViewAddressHook();
  const { handleChooseAddress, addressDetails, handleCreateOrderCash  } = useOrderPayCashHook();
    

  const { handleCreateOrderCard } = useOrderPayCardHook(addressDetails);

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handlePay  = () => {
    if (selectedMethod === "card") {
      handleCreateOrderCard();
    } else if (selectedMethod === "cash") {
      handleCreateOrderCash();
    } else {
      toast.warn("pleas selcted method payment");
    }
  };

  return (
    <div className="payment-method-content">
      <h1 className="page-title">Choose a Payment Method</h1>

      <div className="payment-methods">
        <div
          className={`payment-option ${
            selectedMethod === "cash" ? "active" : ""
          }`}
          onClick={() => handleMethodChange("cash")}
        >
          <FontAwesomeIcon icon={faCashRegister} size="2x" />
          <span>Cash</span>
        </div>

        <div
          className={`payment-option ${
            selectedMethod === "card" ? "active" : ""
          }`}
          onClick={() => handleMethodChange("card")}
        >
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
          <span>Visa</span>
        </div>
        {/*  */}
        <select
          id="address"
          name="address"
          className="form-input"
          onChange={handleChooseAddress}
        >
          <option value="">Select an Address for shipping</option>
          {response && response.data && response.data.data.length > 0 ? (
            response.data.data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.alias}
              </option>
            ))
          ) : (
            <option value="">No addresses found</option>
          )}
        </select>
      </div>

      <button className="btn-primary" onClick={handlePay }>
        Confirm Payment Method
      </button>
    </div>
  );
};

export default ChoosePayMethod;
