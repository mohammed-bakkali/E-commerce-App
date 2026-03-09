import React from "react";
import UserAllOrderCard from "./UserAllOrderCard";

const statusPill = (condition, trueLabel, falseLabel, trueClass, falseClass) => (
  <span className={`order-status-pill ${condition ? trueClass : falseClass}`}>
    <span>●</span> {condition ? trueLabel : falseLabel}
  </span>
);

const UserAllOrderItem = ({ orderItem }) => {
  return (
    <div className="order-item-card">
      {/* Top: order ID */}
      <div className="order-card-top">
        <span className="order-id">
          Order <span>#{orderItem.id || 0}</span>
        </span>
      </div>

      {/* Products */}
      <div className="order-products">
        {orderItem.cartItems?.map((cartItem, index) => (
          <UserAllOrderCard key={index} cartItem={cartItem} />
        ))}
      </div>

      {/* Footer: status pills + total */}
      <div className="order-card-footer">
        {statusPill(orderItem.isDelivered, "Delivered",  "In Progress", "pill-green",  "pill-yellow")}
        {statusPill(orderItem.isPaid,      "Paid",        "Not Paid",    "pill-blue",   "pill-red")}
        <span className="order-status-pill pill-gray">
          {orderItem.paymentMethodType === "cash" ? "💵 Cash" : "💳 Card"}
        </span>
        <span className="order-total">${orderItem.totalOrderPrice}</span>
      </div>
    </div>
  );
};

export default UserAllOrderItem;