import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faClipboardList, faEnvelope,
  faPhoneAlt, faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GetOrderDetailsHook from "../../Hook/admin/get-order-details-hook";
import useChangeOrderStatusHook from "../../Hook/admin/change-order-status-hook";
import "../../styles/AdminOrderDetalis.css";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const { orderData, cartItems } = GetOrderDetailsHook(id);
  const {
    handlePaymentStatusChange, handleDeliveryStatusChange,
    savePaymentStatus, saveDeliveryStatus,
  } = useChangeOrderStatusHook(id);

  const order           = orderData || {};
  const user            = order.user || {};
  const shippingAddress = order.shippingAddress || {};
  const formattedDate   = order.createdAt
    ? new Date(order.createdAt).toLocaleDateString()
    : "N/A";
  const formattedTime   = order.createdAt
    ? new Date(order.createdAt).toLocaleTimeString()
    : "";

  const infoCards = [
    { icon: faClock,         cls: "sales-icon",     bg: "#eff6ff", label: "Order Date",   value: `${formattedDate} ${formattedTime}` },
    { icon: faClipboardList, cls: "orders-icon",    bg: "#fff3f3", label: "Customer",     value: user.name  || "N/A" },
    { icon: faEnvelope,      cls: "revenue-icon",   bg: "#f0fdf4", label: "Email",        value: user.email || "N/A" },
    { icon: faPhoneAlt,      cls: "customers-icon", bg: "#fffbeb", label: "Phone",        value: user.phone || "N/A" },
  ];

  return (
    <div className="order-details-container">

      {/* Header */}
      <div className="order-details-header">
        <h2 className="overview-title">Order #{order.id || "N/A"}</h2>
        <div className="order-detail-pills">
          <span className={`status-${order.isPaid ? "completed" : "pending"}`}>
            ● {order.isPaid ? "Paid" : "Not Paid"}
          </span>
          <span className={`status-${order.isDelivered ? "completed" : "pending"}`}>
            ● {order.isDelivered ? "Delivered" : "In Progress"}
          </span>
        </div>
      </div>

      {/* Info cards */}
      <div className="responsive-grid-250 mb-20" style={{ gap: "14px" }}>
        {infoCards.map(({ icon, cls, bg, label, value }) => (
          <div className="overview-card" key={label}>
            <div className="overview-icon-wrap" style={{ background: bg }}>
              <FontAwesomeIcon icon={icon} className={`overview-icon ${cls}`} />
            </div>
            <div className="overview-text">
              <span>{label}</span>
              <h3 style={{ fontSize: "13px", wordBreak: "break-word" }}>{value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping address */}
      <div className="order-section-card">
        <div className="order-section-title">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Delivery Address
        </div>
        <div className="order-section-body">
          <p><span>Details:</span>     {shippingAddress.details  || "Not Provided"}</p>
          <p><span>Phone:</span>       {user.phone               || "Not Provided"}</p>
          <p><span>Postal Code:</span> {shippingAddress.postalCode || "N/A"}</p>
        </div>
      </div>

      {/* Order items */}
      <div className="order-section-card">
        <div className="order-section-title">Order Items</div>
        <table className="overview-table" style={{ marginTop: 0 }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Color</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              // ── BUG FIX: guard against deleted / null products ──
              if (!item?.product) {
                return (
                  <tr key={index}>
                    <td colSpan="5" style={{ color: "#9ca3af", fontStyle: "italic", fontSize: 13, padding: "14px 16px" }}>
                      Product no longer available (deleted)
                    </td>
                  </tr>
                );
              }

              const imageUrl = item.product.imageCover
                ? `http://127.0.0.1:8000/products/${item.product.imageCover}`
                : null;

              return (
                <tr key={index}>
                  <td>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.product.title}
                        style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8 }}
                      />
                    ) : (
                      <div style={{
                        width: 48, height: 48, borderRadius: 8,
                        background: "#f3f4f6", display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: 10, color: "#9ca3af",
                      }}>N/A</div>
                    )}
                  </td>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>
                    {item.product.title || "Unnamed"}
                  </td>
                  <td>
                    {item.color ? (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6b7280" }}>
                        <span style={{
                          width: 14, height: 14, borderRadius: "50%",
                          background: item.color, border: "2px solid rgba(0,0,0,0.1)",
                          display: "inline-block", flexShrink: 0,
                        }} />
                        {item.color}
                      </span>
                    ) : "—"}
                  </td>
                  <td>{item.count}</td>
                  <td style={{ fontWeight: 700 }}>${item.price?.toFixed(2) || "0.00"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="order-section-card order-totals">
        <div className="order-total-row">
          <span>Total Price</span>
          <strong>${order.totalOrderPrice?.toFixed(2) || "0.00"}</strong>
        </div>
        <div className="order-total-row">
          <span>Payment Method</span>
          <strong style={{ textTransform: "capitalize" }}>{order.paymentMethodType || "—"}</strong>
        </div>
        <div className="order-total-row">
          <span>Payment Status</span>
          <span className={`status-${order.isPaid ? "completed" : "pending"}`}>
            ● {order.isPaid ? "Paid" : "Not Paid"}
          </span>
        </div>
        <div className="order-total-row">
          <span>Delivery Status</span>
          <span className={`status-${order.isDelivered ? "completed" : "pending"}`}>
            ● {order.isDelivered ? "Delivered" : "In Progress"}
          </span>
        </div>
      </div>

      {/* Update status */}
      <div className="order-section-card">
        <div className="order-section-title">Update Order Status</div>
        <div className="update-status">
          <div className="status-group">
            <label>Payment Status</label>
            <div className="status-row">
              <select className="status-select" onChange={handlePaymentStatusChange}>
                <option value="0">Select status</option>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
              </select>
              <button className="btn-save" onClick={savePaymentStatus}>Save</button>
            </div>
          </div>
          <div className="status-group">
            <label>Delivery Status</label>
            <div className="status-row">
              <select className="status-select" onChange={handleDeliveryStatusChange}>
                <option value="0">Select status</option>
                <option value="false">Pending</option>
                <option value="true">Delivered</option>
              </select>
              <button className="btn-save" onClick={saveDeliveryStatus}>Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminOrderDetails;