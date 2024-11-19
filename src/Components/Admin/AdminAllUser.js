import React, { useState } from "react";
import useViewUsersAdminHook from "../../Hook/admin/view-users-admin-hook";
import AdminAllUserItem from "./AdminAllUserItem";
import Pagination from "../Uitilys/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCheck,
  faUserPlus,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const AdminAllUser = () => {
  const { loading, response, pagination, handlePageClick, totalUsers } =
    useViewUsersAdminHook();
  
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered users based on search term
  const filteredUsers = response.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define most active and latest user - placeholder values
  const mostActiveUser = response.length > 0 ? response[0].name : "N/A"; // Replace with actual logic for the most active user
  const latestUser =
    response.length > 0 ? response[response.length - 1].name : "N/A"; // Replace with actual logic for the latest user
  const accountStatus = "Active"; // Placeholder - Replace with actual account status logic if needed

  return (
    <>
      <div className="overview-container">
        <h2 className="overview-title">All Users List</h2>
        
        {/* Search Bar */}
        <div className="search-container mb-20">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="responsive-grid-250 mb-20" style={{ gap: "13px" }}>
          <div className="overview-card">
            <FontAwesomeIcon
              icon={faUser}
              className="overview-icon"
              style={{ color: "#007bff" }}
            />
            <div className="overview-text">
              <span>Total Users</span>
              <h3>{totalUsers}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="overview-icon"
              style={{ color: "#28a745" }}
            />
            <div className="overview-text">
              <span>Most Active User</span>
              <h3>{mostActiveUser}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="overview-icon"
              style={{ color: "#ffc107" }}
            />
            <div className="overview-text">
              <span>Latest User</span>
              <h3>{latestUser}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon
              icon={faUserShield}
              className="overview-icon"
              style={{ color: "#dc3545" }}
            />
            <div className="overview-text">
              <span>Account Status</span>
              <h3>{accountStatus}</h3>
            </div>
          </div>
        </div>

        <table className="overview-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Account Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <AdminAllUserItem key={index} user={user} />
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination.numberOfPages >= 2 ? (
        <Pagination
          totalPages={pagination.numberOfPages ? pagination.numberOfPages : 0}
          onPageChange={handlePageClick}
        />
      ) : null}
    </>
  );
};

export default AdminAllUser;
