import React from "react";
import "../../styles/UserAccountDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart, faHeart,
  faAddressBook, faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  {
    to: "/user/allorders",
    icon: faShoppingCart,
    label: "Orders",
    title: "My Orders",
    bg: "#fff3f3",
    color: "#e53935",
  },
  {
    to: "/user/favoriteproducts",
    icon: faHeart,
    label: "Wishlist",
    title: "Favourites",
    bg: "#fff0f6",
    color: "#e91e8c",
  },
  {
    to: "/user/addresses",
    icon: faAddressBook,
    label: "Addresses",
    title: "My Addresses",
    bg: "#f0f9ff",
    color: "#0284c7",
  },
  {
    to: "/user/profile",
    icon: faUserEdit,
    label: "Profile",
    title: "Account Info",
    bg: "#f0fdf4",
    color: "#16a34a",
  },
];

const UserAccountDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const initial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="account-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Account Dashboard</h2>
      </div>

      {/* Welcome card */}
      {user?.role === "user" && (
        <div className="welcome-card">
          <div className="welcome-avatar">{initial}</div>
          <div className="welcome-text">
            <h3>Welcome back, {user.name} 👋</h3>
            <p>{user.email}</p>
          </div>
        </div>
      )}

      {/* Quick links */}
      <div className="dashboard-cards">
        {quickLinks.map(({ to, icon, label, title, bg, color }) => (
          <Link key={to} to={to} className="dash-card">
            <div className="dash-card-icon" style={{ background: bg }}>
              <FontAwesomeIcon icon={icon} style={{ color }} />
            </div>
            <span className="dash-card-label">{label}</span>
            <span className="dash-card-title">{title}</span>
          </Link>
        ))}
      </div>

      {/* Description */}
      <div className="dashboard-desc">
        From your account dashboard you can view your recent orders, manage
        your shipping and billing addresses, and edit your password and
        account details.
      </div>
    </div>
  );
};

export default UserAccountDashboard;