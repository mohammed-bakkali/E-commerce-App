import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faHeart, // Import the favorite icon
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/NavbarLogin.css";
import useNavbarSearchHook from "../../Hook/search/navbar-search-hook";
import useViewSearchProductsHook from "../../Hook/product/view-search-products";

const NavbarLogin = () => {
  const {OnChangeSearch, searchword} = useNavbarSearchHook();
  const word = localStorage.getItem("searchword") || "";
  return (
    <header>
      <div className="container between-flex">
        <a href="/" style={{textDecoration: "none"}}>
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
          <a href="/login" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faUser} size="2x" className="fa-icon" />
            <span className="icon-label">Login</span> {/* Add label for Login */}
          </a>
          <a href="/favorites" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHeart} size="2x" className="fa-icon" />
            <span className="icon-label">Favorites</span> {/* Add label for Favorites */}
          </a>
          <a href="/cart" className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="fa-icon" />
            <span className="icon-label">Cart</span> {/* Add label for Cart */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogin;
