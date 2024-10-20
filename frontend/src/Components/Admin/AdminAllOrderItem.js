import React from "react";
import jacket1 from "../../assets/images/products/jacket-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye } from "@fortawesome/free-solid-svg-icons"; // Add eye icon for show

const AdminAllOrderItem = ({ orderId }) => {
  return (
    <tr className="order-item-row">
      <td>
        <Link to="/admin/order/01"  className="order-link">
        1d564b921
        </Link>
      </td>

      <td>4.5</td>
      <td>Aug 20, 2021</td>
      <td>3000 EGP</td>
      <td>
        <button className="show-item" style={{marginRight: "6px"}}>
          <FontAwesomeIcon icon={faEye} /> 
        </button>
        <button className="remove-item">
          <FontAwesomeIcon icon={faTrash} /> 
        </button>
      </td>
    </tr>
  );
};

export default AdminAllOrderItem;