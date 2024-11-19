import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetOrderDetailsHook from "../../Hook/admin/get-order-details-hook";
import useChangeOrderStatusHook from "../../Hook/admin/change-order-status-hook";
import "../../styles/AdminOrderDetalis.css";
import {
  faClipboardList,
  faTimesCircle,
  faClock,
  faCheckCircle,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const { orderData, cartItems } = GetOrderDetailsHook(id);
  console.log("1",orderData.isDelivered)

  
  const {
    handlePaymentStatusChange,
    handleDeliveryStatusChange,
    savePaymentStatus,
    saveDeliveryStatus,
  } = useChangeOrderStatusHook(id);

  const order = orderData || {};
  const user = order.user || {};
  const shippingAddress = order.shippingAddress || {};
  const formattedDate = order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A";
  const totalOrderPrice = order.totalOrderPrice || 0;


  return (
    <div className="order-details-container">
      <div className="header-title">Order Details: #{order.id || "N/A"}</div>

      <div className="responsive-grid-250 mb-20" style={{ gap: "15px" }}>
        <div className="overview-card order-created">
          <FontAwesomeIcon icon={faClock} className="overview-icon sales-icon" />
          <div className="overview-text">
            <span>Order Created At</span>
            <h3>
              {formattedDate || "N/A"} at{" "}
              {order.createdAt ? new Date(order.createdAt).toLocaleTimeString() : "N/A"}
            </h3>
          </div>
        </div>
        <div className="overview-card order-name">
          <FontAwesomeIcon icon={faClipboardList} className="overview-icon orders-icon" />
          <div className="overview-text">
            <span>Name</span>
            <h3>{user.name || "N/A"}</h3>
          </div>
        </div>
        <div className="overview-card order-email">
          <FontAwesomeIcon icon={faEnvelope} className="overview-icon revenue-icon" />
          <div className="overview-text">
            <span>Email</span>
            <h3>{user.email || "N/A"}</h3>
          </div>
        </div>
        <div className="overview-card order-contact">
          <FontAwesomeIcon icon={faPhoneAlt} className="overview-icon customers-icon" />
          <div className="overview-text">
            <span>Contact No</span>
            <h3>{user.phone || "N/A"}</h3>
          </div>
        </div>
      </div>

      <div className="customer-details">
        <h3 className="section-title">Delivery Address</h3>
        <p>Address details: <b>{shippingAddress.details || "Not Provided"}</b></p>
        <p>Phone: <b>{user.phone || "Not Provided"}</b></p>
        <p>Postal Code: <b>{shippingAddress.postalCode || "N/A"}</b></p>
      </div>

      <div className="order-items">
        <h3 className="section-title">Order Summary</h3>
        <table className="overview-table">
    <thead>
      <tr>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Color</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item, index) => {
        const imageUrl = item.product.imageCover
          ? `http://127.0.0.1:8000/products/${item.product.imageCover}`
          : "default-image-url.png";
        return (
          <tr key={index}>
            <td>
              <img
                src={imageUrl}
                alt={item.product?.title || "Product Image"}
                className="product-image"
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>{item.product?.title || "Unnamed Product"}</td>
            <td>
              <span
                style={{
                  backgroundColor: item.color,
                  padding: "2px 8px",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                {item.color}
              </span>
            </td>
            <td>{item.count}</td>
            <td>${item.price ? item.price.toFixed(2) : "0.00"}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
      </div>

      <div className="order-summary">
        <p><b>Total Price:</b> ${totalOrderPrice.toFixed(2)}</p>
        <p><b>Payment Status:</b> {orderData.isPaid === true ? "Paid" : "Not Paid"}</p>
        <p><b>Delivery Status:</b>{orderData.isDelivered === true ? "Delivered" : "In Progress"}</p>
      </div>

      <div className="update-status">
        <label htmlFor="orderStatus">Order Status:</label>
        <select
          className="ml-2"
          onChange={handlePaymentStatusChange}
        >
        <option   value="0">Order Status:</option>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button className="btn-primary" onClick={savePaymentStatus}>Save</button>

        <label htmlFor="deliveryStatus" className="ml-4">Delivery Status:</label>
        <select
          id="deliveryStatus"
          className="ml-2"
          onChange={handleDeliveryStatusChange}
        >
          <option value="0">Delivery Status</option>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button className="btn-primary" onClick={saveDeliveryStatus}>Save</button>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
