import React from "react";
import "../../styles/AdminSideMenu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faTag, faPlus, faFolder, faTags, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const AdminSideMenu = () => {
  return (
    <div className="sidmenu">
      <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTachometerAlt} className="icon-dashboard" />
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBox} className="icon-orders" />
          <span>Order Management</span>
        </div>
      </Link>
      <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCartPlus} className="icon-products" />
          <span>Product Management</span>
        </div>
      </Link>
      <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faFolder} className="icon-category" />
          <span>Add Category</span>
        </div>
      </Link>
      <Link to="/admin/addbrand" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTag} className="icon-brand" />
          <span>Add Brand</span>
        </div>
      </Link>
      <Link to="/admin/addsubcategory" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faTags} className="icon-subcategory" />
          <span>Add Subcategory</span>
        </div>
      </Link>
      <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
        <div className="menu-item">
          <FontAwesomeIcon icon={faPlus} className="icon-add-product" />
          <span>Add Product</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideMenu;
