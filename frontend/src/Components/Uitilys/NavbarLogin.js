import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt,
  faEnvelope,
  faCog,
  faQuestionCircle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
import "../../styles/NavbarLogin.css";
import avatar from "../../assets/icons/man-avatar.png"; // Adjust the path as necessary
import useNavbarSearchHook from "../../Hook/search/navbar-search-hook";

const NavbarLogin = () => {
  const { OnChangeSearch } = useNavbarSearchHook();
  const word = localStorage.getItem("searchword") || "";

  // User state and dropdown menu state
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Retrieve user info
  let user = JSON.parse(localStorage.getItem("user")) || null;

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";  
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
              backgroundColor: "black",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="icons d-flex align-center">
          {user ? (
            <div className="action" ref={dropdownRef}>
              <div className="profile" onClick={toggleDropdown}>
                <img src={avatar} alt="User Avatar" />
              </div>
              <div className={`menu ${isDropdownOpen ? "active" : ""}`}>
                <h3>
                  {user.name}
                  <br />
                  <span>{user.role}</span>
                </h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={user.role === "admin" ? faCog : faUser} />
                    {user.role === "admin" ? (
                      <a href="/admin/dashboard">Dashboard</a>
                    ) : (
                      <a href="/user/profile">My Profile</a>
                    )}
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faEdit} />
                    <a href="#">Edit Profile</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="#">Inbox</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCog} />
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <a href="#">Help</a>
                  </li>
                  <li onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <a href="/login" className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faUser} size="2x" className="fa-icon" />
              <span className="icon-label">Login</span>
            </a>
          )}
          <a href="/user/favoriteproducts" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHeart} size="2x" className="fa-icon" />
            <span className="icon-label">Favorites</span>
          </a>
          <a href="/cart" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              className="fa-icon"
            />
            <span className="icon-label">Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogin;
