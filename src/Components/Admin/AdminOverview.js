import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTimesCircle,
  faClock,
  faCheckCircle,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminOverview.css";
import useUserGetAllOrdersHook from "../../Hook/user/user-get-all-orders-hook";
import useViewProductsAdminHook from "../../Hook/admin/view-products-admin-hook";
import SalesChart from "../Chart/SalesChart";

const AdminOverview = () => {
  const { results, totalPaidSales, customerCount } =   useUserGetAllOrdersHook();

  const { numberOfProducts } = useViewProductsAdminHook();
  console.log(numberOfProducts)
  const monthlySalesData = [
    { month: "January", sales: 1200 },
    { month: "February", sales: 1500 },
    { month: "March", sales: 900 },
    // ...
  ];

  return (
    <div className="overview-container">
      <h2 className="overview-title">Dashboard</h2>
    
      <div className="responsive-grid-250 mb-20" style={{ gap: "13px" }}>
        <div className="overview-card">
          <FontAwesomeIcon icon={faClipboardList} className="overview-icon sales-icon" />
          <div className="overview-text">
            <span>Total Sales Paid</span>
            <h3>${totalPaidSales}</h3>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faTimesCircle} className="overview-icon orders-icon" />
          <div className="overview-text">
            <span>Number of Orders</span>
            <h3>{results}</h3>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faClock} className="overview-icon revenue-icon" />
          <div className="overview-text">
            <span>Number of Products</span>
            <h3>{numberOfProducts}</h3>
          </div>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faCheckCircle} className="overview-icon customers-icon" />
          <div className="overview-text">
            <span>Number of Customers</span>
            <h3>{customerCount}</h3>
          </div>
        </div>
    </div>
    {/*  */}
    <SalesChart totalPaidSales={totalPaidSales} results={results} customerCount={customerCount}monthlySalesData={monthlySalesData} />
      <table className="overview-table">
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
                <FontAwesomeIcon icon={faEye} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminOverview;
