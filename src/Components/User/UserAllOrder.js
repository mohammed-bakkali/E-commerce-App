import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";
import "../../styles/UserAllOrder.css";
import useUserGetAllOrdersHook from "../../Hook/user/user-get-all-orders-hook";
import Pagination from "../Uitilys/Pagination";

const UserAllOrder = () => {
  const { userName, results, paginate, orderData, handlePageClick } =
    useUserGetAllOrdersHook();


  return (
    <div>
      <h1 className="page-title">Number of Orders {results}</h1>
      <div className="">
        {orderData.length > 0 ? (
          orderData.map((orderItem, index) => (
            <UserAllOrderItem key={index} orderItem={orderItem} />
          ))
        ) : (
          <p>No orders found</p>
        )}
        {paginate.numberOfPages >= 2 ? (
          <Pagination
            totalPages={paginate.numberOfPages ? paginate.numberOfPages : 0}
            onPageChange={handlePageClick}
          />
        ) : null}
      </div>
    </div>
  );
};

export default UserAllOrder;
