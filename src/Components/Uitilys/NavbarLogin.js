import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/NavbarLogin.css";

const NavbarLogin = () => {
  return (
    <header>
      <div className="container between-flex">
        <a href="/" style={{textDecoration: "none"}}>
          <div className="logo fw-bold c-black">NEXTON</div>
        </a>

        <div className="group d-flex" style={{ width: "628px" }}>
          <input
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
        <div className="icons">
          <a href="/login">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </a>
          <a href="/card">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogin;
