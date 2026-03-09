import React from "react";
import { Link } from "react-router-dom";
import useViewAddressHook from "../../Hook/user/view-address-hook";
import UserAddreesCard from "./UserAddreesCard";
import "../../styles/UserAllAddressCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UserAllAddrees = () => {
  const { response } = useViewAddressHook();
  const addresses = response?.data?.data || [];

  return (
    <div className="addresses-page">
      {/* Header */}
      <div className="addresses-header">
        <h2>My Addresses</h2>
        <Link to="/user/add-addresses">
          <button className="btn-add">
            <FontAwesomeIcon icon={faPlus} />
            Add Address
          </button>
        </Link>
      </div>

      {/* Table */}
      <table className="overview-table">
        <thead>
          <tr>
            <th>Alias</th>
            <th>Details</th>
            <th>Postal Code</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.length > 0 ? (
            addresses.map((item, index) => (
              <UserAddreesCard key={index} item={item} />
            ))
          ) : (
            <tr className="address-empty">
              <td colSpan="5">No addresses found. Add your first address!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserAllAddrees;