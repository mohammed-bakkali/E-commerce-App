import React from "react";
import { Link } from "react-router-dom";
import useViewAddressHook from "../../Hook/user/view-address-hook";
import UserAddreesCard from "./UserAddreesCard";

const UserAllAddrees = () => {
  const { response } = useViewAddressHook();

  return (
    <>

      <div className="overview-container">
      <div className="overview-title">All Addresses List</div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <Link to="/user/add-addresses" style={{ textDecoration: "none" }}>
              <button className="btn-add">Add New Address</button>
            </Link>
        </div>
        <table className="overview-table">
          <thead>
            <tr>
              <th>Address Name</th>
              <th>Details</th>
              <th>Postal Code</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {response && response.data ? (
              response.data.data.map((item, index) => (
                <UserAddreesCard key={index} item={item} />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No addresses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </>
  );
};

export default UserAllAddrees;
