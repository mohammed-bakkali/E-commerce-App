import React from "react";
import "../../styles/Services.css";

const Services = () => {
  return (
    <div className="container">
    <div className="responsive-grid-300 mt-20">
    <div className="service-card">
        <i className="fas fa-shipping-fast icon-service"></i>
        <div className="">
        <h3>Fast & Secure Delivery</h3>
        <p>Tell about your service.</p>
        </div>
      </div>
      <div className="service-card">
        <i className="fas fa-credit-card icon-service"></i>
        <div>
          <h3>Online Pay</h3>
          <p>Secure and easy online payments.</p>
        </div>
      </div>

      <div className="service-card">
        <i className="fas fa-money-bill-wave icon-service"></i>
        <div className="">
          <h3>Money Back Guarantee</h3>
          <p>Within 5 business days</p>
        </div>
      </div>
      <div className="service-card">
        <i className="fas fa-headset icon-service"></i>
        <div className="">
          <h3>24 X 7 Service</h3>
          <p>Online service for customer</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
