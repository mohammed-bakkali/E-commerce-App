import React from "react";
import AdminAllOrderItem from "./AdminAllOrderItem";

const AdminAllOrders = () => {
  return (
    <>
      <div className="admin-orders-header">
        Manage All Product Orders
      </div>
      <table className="admin-orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic Rendering */}
          {[1, 2, 3, 4].map((orderId) => (
            <AdminAllOrderItem key={orderId} orderId={orderId} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminAllOrders;
