import React from "react";
import CartItem from "../Cart/CartItem";
import "../../styles/AdminOrderDetalis.css"
const AdminOrderDetails = () => {
  return (
    <div>
      <div className="mb-10 fw-bold fs-20">Details Order Number #01</div>
      {/* Order Items */}
      <div className="order-items mb-10">
        <h3 className="fw-bold fs-18">Order Items</h3>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      {/* Customer Details Section */}
      <div className="customer-details mb-10">
        <h3 className="fw-bold fs-18">Customer Details</h3>
        <p className="mb-2">Name: John Doe</p>
        <p className="mb-2">Email: john.doe@example.com</p>
        <p className="mb-2">Phone: +1234567890</p>
        <p className="mb-2">Address: 123 Main St, City, Country</p>

        {/* Order Price and Status */}
        <p className="mb-2">Total Orders: 300$</p>
        <div className="mb-2">
          <label htmlFor="orderStatus" className="fw-bold">
            Order Status:
          </label>
          <select id="orderStatus" className="ml-2">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="mt-10">
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
