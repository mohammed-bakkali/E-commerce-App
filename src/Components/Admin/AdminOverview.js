import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList, faShoppingCart,
  faBoxOpen, faUsers, faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminOverview.css";
import useUserGetAllOrdersHook from "../../Hook/user/user-get-all-orders-hook";
import useViewProductsAdminHook from "../../Hook/admin/view-products-admin-hook";
import SalesChart from "../Chart/SalesChart";

const statCards = (totalPaidSales, results, numberOfProducts, customerCount) => [
  {
    icon: faClipboardList, iconClass: "sales-icon",
    bg: "#eff6ff", label: "Total Sales Paid",
    value: `$${totalPaidSales || 0}`,
  },
  {
    icon: faShoppingCart, iconClass: "orders-icon",
    bg: "#fff3f3", label: "Total Orders",
    value: results || 0,
  },
  {
    icon: faBoxOpen, iconClass: "revenue-icon",
    bg: "#f0fdf4", label: "Total Products",
    value: numberOfProducts || 0,
  },
  {
    icon: faUsers, iconClass: "customers-icon",
    bg: "#fffbeb", label: "Total Customers",
    value: customerCount || 0,
  },
];

const sampleOrders = [
  { id: "1d564b921", date: "Aug 20, 2021", method: "Stripe",  status: "completed", total: "$100.00" },
  { id: "d564b9213", date: "Apr 20, 2021", method: "—",       status: "pending",   total: "$1,050.00" },
  { id: "d564b9214", date: "Feb 10, 2023", method: "—",       status: "cancelled", total: "$700.00" },
  { id: "d564b9217", date: "Jun 30, 2024", method: "Paypal",  status: "completed", total: "$500.00" },
];

const monthlySalesData = [
  { month: "January", sales: 1200 },
  { month: "February", sales: 1500 },
  { month: "March", sales: 900 },
];

const AdminOverview = () => {
  const { results, totalPaidSales, customerCount } = useUserGetAllOrdersHook();
  const { numberOfProducts } = useViewProductsAdminHook();

  return (
    <div className="overview-container">
      <h2 className="overview-title">Dashboard</h2>

      {/* Stat cards */}
      <div className="responsive-grid-350 mb-20" style={{ gap: "14px" }}>
        {statCards(totalPaidSales, results, numberOfProducts, customerCount).map(
          ({ icon, iconClass, bg, label, value }) => (
            <div className="overview-card" key={label}>
              <div className="overview-icon-wrap" style={{ background: bg }}>
                <FontAwesomeIcon icon={icon} className={`overview-icon ${iconClass}`} />
              </div>
              <div className="overview-text">
                <span>{label}</span>
                <h3>{value}</h3>
              </div>
            </div>
          )
        )}
      </div>

      {/* Chart */}
      <SalesChart
        totalPaidSales={totalPaidSales}
        results={results}
        customerCount={customerCount}
        monthlySalesData={monthlySalesData}
      />

      {/* Recent orders table */}
      {/* <div className="table-header">
        <h3>Recent Orders</h3>
        <button className="btn-export">Export CSV</button>
      </div> */}

      {/* <table className="overview-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Method</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map(({ id, date, method, status, total }) => (
            <tr key={id}>
              <td style={{ fontFamily: "monospace", color: "#6b7280" }}>#{id}</td>
              <td>{date}</td>
              <td>{method}</td>
              <td>
                <span className={`status-${status}`}>● {status}</span>
              </td>
              <td style={{ fontWeight: 700 }}>{total}</td>
              <td>
                <button className="view-btn">
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AdminOverview;