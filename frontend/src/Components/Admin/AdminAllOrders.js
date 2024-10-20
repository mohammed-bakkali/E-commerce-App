import React from "react";
import AdminAllOrderItem from "./AdminAllOrderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faClipboardList,
  faTimesCircle,
  faClock,
  faCheckCircle,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
const AdminAllOrders = () => {
  return (
    <>
      <div className="admin-orders-header">Manage All Product Orders</div>
      <table className="admin-orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Method</th>
            <th>Payment Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1d564b921</td>
            <td>Aug 20, 2021</td>
            <td>Stripe</td>
            <td>
              <span className="status-completed">completed</span>
            </td>
            <td>$100.00</td>
            <td>
              <button className="view-btn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </td>
          </tr>
          <tr>
            <td>d564b9213</td>
            <td>Apr 20, 2021</td>
            <td>---</td>
            <td>
              <span className="status-pending">pending</span>
            </td>
            <td>$1050.00</td>
            <td>
              <button className="view-btn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </td>
          </tr>
          <tr>
            <td>d564b9214</td>
            <td>Feb 10, 2023</td>
            <td>---</td>
            <td>
              <span className="status-cancelled">cancelled</span>
            </td>
            <td>$700.00</td>
            <td>
              <button className="view-btn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </td>
          </tr>
          <tr>
            <td>d564b9217</td>
            <td>Jun 30, 2024</td>
            <td>Paypal</td>
            <td>
              <span className="status-completed">completed</span>
            </td>
            <td>$500.00</td>
            <td>
              <button className="view-btn">
                <Link to="/admin/order/01" className="order-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminAllOrders;
