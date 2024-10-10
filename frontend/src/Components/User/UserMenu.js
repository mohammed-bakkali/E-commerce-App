import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faHeart, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminSideMenu.css";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="sidmenu">
      <Link to="/user/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBoxOpen} className="icon-orders" />
          <span>Order Management</span>
        </div>
      </Link>
      <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faHeart} className="icon-products" />
          <span>Products Favorite</span>
        </div>
      </Link>
      <Link to="/user/addresses" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-category" />
          <span>Addresses Personal</span>
        </div>
      </Link>
      <Link to="/user/profile" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} className="icon-dashboard" />
          <span>Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default UserMenu;
