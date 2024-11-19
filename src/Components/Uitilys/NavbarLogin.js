import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSignOutAlt,
  faEnvelope,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"; 

import { faUser as faNewLoginIcon } from "@fortawesome/free-regular-svg-icons"; // Replace with new login icon
import { faCartPlus as faNewCartIcon } from "@fortawesome/free-solid-svg-icons"; // Replace with new cart icon
import "../../styles/NavbarLogin.css";
import avatar from "../../assets/icons/man-avatar.png";
import useNavbarSearchHook from "../../Hook/search/navbar-search-hook";

import favoff from "../../assets/icons/fav-off.png";
import useGetAllUserCartHook from "../../Hook/cart/get-all-user-cart-hook";
import TopHeader from "./TopHeader";

const NavbarLogin = () => {
  const { OnChangeSearch } = useNavbarSearchHook();
  const word = localStorage.getItem("searchword") || "";

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  let user = JSON.parse(localStorage.getItem("user")) || null;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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

  const { itemsNum } = useGetAllUserCartHook();

  return (
    <>
      <header>
        <div className="container between-flex">
          <a href="/" style={{ textDecoration: "none" }}>
            <div className="logo fw-bold c-black">ShopZone</div>
          </a>

          <div className="group d-flex" style={{ width: "628px" }}>
            <input
              value={word}
              onChange={OnChangeSearch}
              type="text"
              placeholder="Search in products..."
              className="search-bar w-full"
              style={{ borderRight: "none", outline: "none" }}
            />
            <button
              type="button"
              className="c-white"
              style={{
                width: "64px",
                backgroundColor: "black",
                border: "none",
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
                      <FontAwesomeIcon
                        icon={user.role === "admin" ? faCog : faNewLoginIcon}
                      />
                      {user.role === "admin" ? (
                        <a href="/admin/dashboard">Dashboard</a>
                      ) : (
                        <a href="/user/profile">My Profile</a>
                      )}
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faClipboardList} />
                      {user.role === "admin" ? (
                        <a href="/admin/allorders">Orders</a>
                      ) : (
                        <a href="/user/allorders">Orders</a>
                      )}
                    </li>
                    <li onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <a
                href="/login"
                className="d-flex flex-column align-items-center"
              >
                <FontAwesomeIcon
                  icon={faNewLoginIcon}
                  size="2x"
                  className="fa-icon"
                />
                <span className="icon-label">Login</span>
              </a>
            )}
            <a
              href="/user/favoriteproducts"
              className="d-flex flex-column align-items-center"
            >
              <img
                src={favoff}
                alt=""
                className="text-center"
                style={{
                  height: "24px",
                  width: "26px",
                  cursor: "pointer",
                }}
              />
              <span className="icon-label">Favorites</span>
            </a>
            <a href="/cart" className="d-flex flex-column align-items-center">
              <div style={{ position: "relative" }}>
                <FontAwesomeIcon
                  icon={faNewCartIcon}
                  size="2x"
                  className="fa-icon"
                />
                {<span className="cart-notification">{itemsNum || 0}</span>}
              </div>
              <span className="icon-label">Cart</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarLogin;
