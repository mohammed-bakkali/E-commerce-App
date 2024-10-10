import React from "react";
import "../../styles/UserAllAddressCard.css";
import { Link } from "react-router-dom";
const UserAllAddressCard = () => {
  return (
    <div className="address-card">
      <h3 className="address-title">User Address</h3>
      <p className="address-details">1234 Street, City, Country</p>
      <p className="address-details">Phone: +123456789</p>
      <div className="address-actions">
        <Link to="/user/edite-address" style={{ textDecoration: "none" }}>
          <button className="btn-edit">Edit</button>
        </Link>
        <Link to="/user/delete-address" style={{ textDecoration: "none" }}>
          <button className="btn-delete">Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default UserAllAddressCard;
