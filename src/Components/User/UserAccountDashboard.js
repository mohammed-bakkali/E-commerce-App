import React from "react";
import "../../styles/UserAccountDashboard.css";

const UserAccountDashboard = () => {
  let user = JSON.parse(localStorage.getItem("user")) || null;
  return (
    <div className="container">
    <h1 class="page-title">My Account </h1>
      <div className="user-dashboard">
        {user && user.role === "user" ? (
          <p className="welcome-message">Hello {user.name}</p>
        ) : null}
        {user && user.role === "user" ? (
          <p>
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default UserAccountDashboard;
