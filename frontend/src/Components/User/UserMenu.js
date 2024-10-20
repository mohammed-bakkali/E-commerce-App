import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faHeart,
  faMapMarkerAlt,
  faUser,
  faCog, 
  faStar, 
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminSideMenu.css";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="sidmenu">
      {/* Order Management */}
      <Link to="/user/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBoxOpen} className="icon-orders" />
          <span>Order Management</span>
        </div>
      </Link>

      {/* Favorite Products */}
      <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faHeart} className="icon-products" />
          <span>Products Favorite</span>
        </div>
      </Link>

      {/* Personal Addresses */}
      <Link to="/user/addresses" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-category" />
          <span>Addresses Personal</span>
        </div>
      </Link>

      {/* User Profile */}
      <Link to="/user/profile" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} className="icon-dashboard" />
          <span>Profile</span>
        </div>
      </Link>

      {/* Account Settings */}
      <Link to="/user/settings" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCog} className="icon-settings" />
          <span>Account Settings</span>
        </div>
      </Link>

      {/* Product Reviews */}
      <Link to="/user/reviews" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faStar} className="icon-reviews" />
          <span>Product Reviews</span>
        </div>
      </Link>
    </div>
  );
};

export default UserMenu;
