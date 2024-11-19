// AdminAllOrders.js
import React from "react";
import AdminAllOrderItem from "./AdminAllOrderItem";
import "../../styles/AdminOverview.css";
import useUserGetAllOrdersHook from "../../Hook/user/user-get-all-orders-hook";
import Pagination from "../Uitilys/Pagination";

const AdminAllOrders = () => {
  const { userName, results, paginate, orderData, handlePageClick } =
    useUserGetAllOrdersHook();

  return (
    <>
      <div className="overview-container">
        <h2 className="overview-title"> All Orders List</h2>
        <table className="overview-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Method</th>
              <th>Payment Status</th>
              <th>Total</th>
              <th>Customer Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderData.length > 0 ? (
              orderData.map((orderItem, index) => (
                <AdminAllOrderItem key={index} orderItem={orderItem} />
              ))
            ) : (
              <p>No addresses found</p>
            )}
          </tbody>
        </table>
        {paginate.numberOfPages >= 2 ? (
          <Pagination
            totalPages={paginate.numberOfPages ? paginate.numberOfPages : 0}
            onPageChange={handlePageClick}
          />
        ) : null}
      </div>
    </>
  );
};

export default AdminAllOrders;
