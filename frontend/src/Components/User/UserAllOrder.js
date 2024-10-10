import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";
import "../../styles/UserAllOrder.css"

const UserAllOrder = () => {
  return (
    <div>
      <h1 className="page-title">Welocom Mohammed Bakkali</h1>
      <div className="">
        <UserAllOrderItem />
        <UserAllOrderItem />
      </div>
    </div>
  );
};

export default UserAllOrder;
