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
          Order #{orderId}
        </Link>
      </td>
      <td className="product-info">
        <img src={jacket1} alt="Product" className="product-image" />
        Découvrez l'iPhone XR Noir 128 Go reconditionné en bonne occasion au Maroc, un smartphone Apple élégant
      </td>
      <td>4.5</td>
      <td>
        <input
          type="number"
          placeholder="Quantity"
          className="quantity-input"
          defaultValue={1}
        />
      </td>
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