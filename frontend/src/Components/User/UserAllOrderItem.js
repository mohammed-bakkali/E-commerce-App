import React from "react";
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = () => {
  return (
    <div className="p-10 mb-20" style={{background: "#fff", border: "1px solid #ccc"}}>
      <div className="">Number Order #23456</div>
      <UserAllOrderCard />
      <UserAllOrderCard />
      <div className="between-flex">
        <div >
          <div className="mr-10 ">status: <span>In progress</span></div>
        </div>
        <div>
          <div className="">3000$</div>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrderItem;
