import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const AdminAllOrderItem = ({ orderItem }) => {
  const { _id, createdAt, paymentMethodType, isPaid, totalOrderPrice, user } = orderItem;
  
  const paymentStatus = isPaid ? "completed" : "pending";
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const customerName = user?.name || "Unknown Customer"; 

  

  return (
    <tr className="order-item-row">
      <td>
        <Link to={`/admin/order/${_id}`} className="order-link" style={{color: "black"}}>
          {orderItem.id}
        </Link>
      </td>
      <td>{formattedDate}</td>
      <td>{paymentMethodType || "---"}</td>
      <td>
        <span className={`status-${paymentStatus}`}>{paymentStatus}</span>
      </td>
      <td>${totalOrderPrice.toFixed(2)}</td>
      <td>{customerName}</td> 
      <td>
      <Link to={`/admin/order/${_id}`} className="order-link">
        <button className="view-btn" style={{ marginRight: "6px" }}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </Link>
      </td>
    
    </tr>
  );
};

export default AdminAllOrderItem;
