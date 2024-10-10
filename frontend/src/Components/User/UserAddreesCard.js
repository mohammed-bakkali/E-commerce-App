import React from "react";
import UserAllAddressCard from "./UserAllAddressCard";
import { Link } from "react-router-dom";
const UserAddreesCard = () => {
  return (
    <div>
      <h1 className="page-title">address book</h1>
      <UserAllAddressCard />
      <UserAllAddressCard />
      <UserAllAddressCard />
      <Link to="/user/add-addresses" style={{ textDecoration: "none" }}>
        <button className="btn-primary">Add New Adress</button>
      </Link>
    </div>
  );
};

export default UserAddreesCard;
