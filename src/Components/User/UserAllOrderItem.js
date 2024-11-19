import React from "react";
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = ({ orderItem }) => {
console.log("orderItem",orderItem)


  return (
    <div className="p-10 mb-20 " style={{background: "#fff", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
      <div className="" style={{fontWeight: "bold"}}>Number Order: <span style={{color: "gray"}}>{orderItem.id || 0}</span></div>

      {
        orderItem.cartItems ? (orderItem.cartItems.map((cartItem, index) => {
        return  <UserAllOrderCard  key={index} cartItem={cartItem}/>
        })) : null
      }

    
      <div className="between-flex">
        <div >
          <div className="mr-10 " style={{fontWeight: "bold"}}>Delivery Status: <span style={{color: "gray"}}>{orderItem.isDelivered === true ? "Delivered" : "In Progress"}</span></div>
        </div>
        <div >
          <div className="mr-10 " style={{fontWeight: "bold"}}>Payment Status: <span style={{color: "gray"}}>{orderItem.isPaid === true ? "Paid" : "Not Paid"}</span></div>
        </div>
        <div >
          <div className="mr-10 " style={{fontWeight: "bold"}} >Payment Method: <span style={{color: "gray"}}>{orderItem.paymentMethodType === "cash" ? "Cash" : "Cerdite Card"}</span></div>
        </div>
        <div>
        <div className="" style={{fontWeight: "bold"}}>Total Price: <span style={{color: "gray"}}>{orderItem.totalOrderPrice}$</span></div>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrderItem;
