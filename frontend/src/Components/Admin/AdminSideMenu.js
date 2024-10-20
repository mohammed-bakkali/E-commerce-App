import React from "react";
import "../../styles/AdminSideMenu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faBox,
  faTag,
  faTags,
  faPlus,
  faFolder,
  faCartPlus,
  faTasks,
  faUsers // أيقونة المستخدمين
} from '@fortawesome/free-solid-svg-icons';

const AdminSideMenu = () => {
  return (
    <div className="sidmenu">
      {/* Dashboard */}
      <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTachometerAlt} className="icon-dashboard" />
          <span>Dashboard</span>
        </div>
      </Link>

      {/* Order Management */}
      <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBox} className="icon-orders" />
          <span>Order Management</span>
        </div>
      </Link>

      {/* Product Management */}
      <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCartPlus} className="icon-products" />
          <span>Product Management</span>
        </div>
      </Link>

      {/* Manage Brand */}
      <Link to="/admin/managebrand" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTag} className="icon-manage-brand" />
          <span>Manage Brand</span>
        </div>
      </Link>

      {/* Manage Category */}
      <Link to="/admin/managecategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFolder} className="icon-manage-category" />
          <span>Manage Category</span>
        </div>
      </Link>

      {/* Manage Subcategory */}
      <Link to="/admin/managesubcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTags} className="icon-manage-subcategory" />
          <span>Manage Subcategory</span>
        </div>
      </Link>

      {/* Add Brand */}
      <Link to="/admin/addbrand" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTag} className="icon-add-brand" />
          <span>Add Brand</span>
        </div>
      </Link>

      {/* Add Category */}
      <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFolder} className="icon-add-category" />
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
          <FontAwesomeIcon icon={faPlus} className="icon-add-product" />
          <span>Add Product</span>
        </div>
      </Link>

      {/* User Management */}
      <Link to="/admin/users" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUsers} className="icon-users" />
          <span>User Management</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideMenu;
