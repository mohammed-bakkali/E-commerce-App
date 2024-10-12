import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt, // أيقونة لتسجيل الخروج
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/NavbarLogin.css";
import useNavbarSearchHook from "../../Hook/search/navbar-search-hook";

const NavbarLogin = () => {
  const { OnChangeSearch } = useNavbarSearchHook();
  const word = localStorage.getItem("searchword") || "";
  
  // حالة المستخدم و القائمة المنسدلة
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  let user = "";
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user.name);
  }

  // دالة للتبديل بين فتح وإغلاق القائمة المنسدلة
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // إعادة تحميل الصفحة بعد تسجيل الخروج
  };

  return (
    <header>
      <div className="container between-flex">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo fw-bold c-black">NEXTON</div>
        </a>

        <div className="group d-flex" style={{ width: "628px" }}>
          <input
            value={word}
            onChange={OnChangeSearch}
            type="text"
            placeholder="Search in products..."
            className="search-bar w-full"
            style={{ borderRight: "none" }}
          />
          <button
            type="button"
            className="c-white"
            style={{
              width: "64px",
              backgroundColor: "#3b71ca",
              border: "1px solid #3b71ca",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="icons d-flex align-center">
          {user ? (
            <div className="dropdown-login">
              <button onClick={toggleDropdown} className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faUser} size="2x" className="fa-icon" />
                <span className="icon-label">{user.name}</span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu-login">
                  <a href="/profile" className="dropdown-item">Profile</a>
                  <a href="/orders" className="dropdown-item">Orders</a>
                  <button onClick={handleLogout} className="dropdown-item">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a href="/login" className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faUser} size="2x" className="fa-icon" />
              <span className="icon-label">Login</span>
            </a>
          )}
          <a href="/favorites" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHeart} size="2x" className="fa-icon" />
            <span className="icon-label">Favorites</span>
          </a>
          <a href="/cart" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="fa-icon" />
            <span className="icon-label">Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogin;
