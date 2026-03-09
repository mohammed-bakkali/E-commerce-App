import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faUserEdit, faHeart,
  faShoppingCart, faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminSideMenu.css";
import { NavLink } from "react-router-dom";

const menuItems = [
  { to: "/user/account-dashboard", icon: faHome,         label: "Dashboard" },
  { to: "/user/profile",           icon: faUserEdit,     label: "Account Info" },
  { to: "/user/favoriteproducts",  icon: faHeart,        label: "Favourites" },
  { to: "/user/allorders",         icon: faShoppingCart, label: "My Orders" },
  { to: "/user/addresses",         icon: faAddressBook,  label: "Addresses" },
];

const UserMenu = () => {
  return (
    <div className="sidmenu">
      <div className="logo-container">
        <h1 className="logo-text">Shop<span>Zone</span></h1>
      </div>

      <span className="menu-section-label">My Account</span>

      {menuItems.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `menu-item${isActive ? " active" : ""}`}
        >
          <FontAwesomeIcon icon={icon} className="icon-dashboard" />
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default UserMenu;