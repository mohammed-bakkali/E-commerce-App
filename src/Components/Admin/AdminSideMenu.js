import React from "react";
import "../../styles/AdminSideMenu.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,        // Dashboard
  faClipboardList,    // Order Management
  faBoxOpen,          // Product Management
  faWarehouse,        // Manage Brand
  faLayerGroup,       // Manage Category
  faFolderOpen,       // Manage Subcategory
  faPlusSquare,       // Add Brand
  faFolderPlus,       // Add Category
  faTags,             // Add Subcategory
  faBox,              // Add Product
  faGift,             // Coupons
  faUserFriends       // User Management
} from "@fortawesome/free-solid-svg-icons";


const AdminSideMenu = () => {
  return (
    <div className="sidmenu w-full">
      <div className="logo-container">
        <h1 className="logo-text">ShopZone</h1>
      </div>
      
      {/* Dashboard */}
      <NavLink to="/admin/dashboard" activeClassName="active" exact>
        <div className="menu-item">
          <FontAwesomeIcon icon={faChartLine} className="icon-dashboard" />
          <span>Dashboard</span>
        </div>
      </NavLink>

      {/* Order Management */}
      <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faClipboardList} className="icon-orders" />
          <span>Order Management</span>
        </div>
      </Link>

      {/* Product Management */}
      <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBoxOpen} className="icon-products" />
          <span>Product Management</span>
        </div>
      </Link>

      {/* Manage Brand */}
      <Link to="/admin/managebrand" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faWarehouse} className="icon-manage-brand" />
          <span>Manage Brand</span>
        </div>
      </Link>

      {/* Manage Category */}
      <Link to="/admin/managecategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faLayerGroup} className="icon-manage-category" />
          <span>Manage Category</span>
        </div>
      </Link>

      {/* Manage Subcategory */}
      <Link to="/admin/managesubcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFolderOpen} className="icon-manage-subcategory" />
          <span>Manage Subcategory</span>
        </div>
      </Link>

      {/* Add Brand */}
      <Link to="/admin/addbrand" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faPlusSquare} className="icon-add-brand" />
          <span>Add Brand</span>
        </div>
      </Link>

      {/* Add Category */}
      <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFolderPlus} className="icon-add-category" />
          <span>Add Category</span>
        </div>
      </Link>

      {/* Add Subcategory */}
      <Link to="/admin/addsubcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTags} className="icon-add-subcategory" />
          <span>Add Subcategory</span>
        </div>
      </Link>

      {/* Add Product */}
      <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBox} className="icon-add-product" />
          <span>Add Product</span>
        </div>
      </Link>

      {/* Add Coupon */}
      <Link to="/admin/coupons" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faGift} className="icon-add-coupon" />
          <span>Coupons</span>
        </div>
      </Link>

      {/* User Management */}
      <Link to="/admin/users" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUserFriends} className="icon-users" />
          <span>User</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideMenu;

