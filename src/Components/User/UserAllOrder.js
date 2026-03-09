import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";
import "../../styles/UserAllOrder.css";
import useUserGetAllOrdersHook from "../../Hook/user/user-get-all-orders-hook";
import Pagination from "../Uitilys/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const UserAllOrder = () => {
  const { results, paginate, orderData, handlePageClick } = useUserGetAllOrdersHook();

  return (
    <div className="user-orders-page">
      {/* Header */}
      <div className="orders-header">
        <h2>My Orders</h2>
        <span className="orders-count-badge">{results || 0} orders</span>
      </div>

      {/* List */}
      {orderData.length > 0 ? (
        <>
          {orderData.map((orderItem, index) => (
            <UserAllOrderItem key={index} orderItem={orderItem} />
          ))}
          {paginate.numberOfPages >= 2 && (
            <Pagination
              totalPages={paginate.numberOfPages || 0}
              onPageChange={handlePageClick}
            />
          )}
        </>
      ) : (
        <div className="orders-empty">
          <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: 40, color: "#e5e7eb" }} />
          <p>No orders found</p>
          <span style={{ fontSize: 13 }}>Your order history will appear here</span>
        </div>
      )}
    </div>
  );
};

export default UserAllOrder;