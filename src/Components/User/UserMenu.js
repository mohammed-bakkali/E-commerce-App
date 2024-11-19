import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserEdit,
  faHeart,
  faShoppingCart,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminSideMenu.css";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="sidmenu w-full">
      <div className="logo-container">
        <h1 className="logo-text">ShopZone</h1>
      </div>
      {/* Account Dashboard */}
      <Link to="/user/account-dashboard" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faHome} className="icon-dashboard" />
          <span>Account Dashboard</span>
        </div>
      </Link>

      {/* User Profile */}
      <Link to="/user/profile" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUserEdit} className="icon-dashboard" />
          <span>Account Information</span>
        </div>
      </Link>

      {/* Favorite Products */}
      <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faHeart} className="icon-products" />
          <span>Favorite Products</span>
        </div>
      </Link>

      {/* Order Management */}
      <Link to="/user/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faShoppingCart} className="icon-orders" />
          <span>Orders</span>
        </div>
      </Link>

      {/* Personal Addresses */}
      <Link to="/user/addresses" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faAddressBook} className="icon-category" />
          <span>Personal Addresses</span>
        </div>
      </Link>

      {/* Account Settings */}
      {/* <Link to="/user/settings" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faWrench} className="icon-settings" />
          <span>Account Settings</span>
        </div>
      </Link> */}
    </div>
  );
};

export default UserMenu;
