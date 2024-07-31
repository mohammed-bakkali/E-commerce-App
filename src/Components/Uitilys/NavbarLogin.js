import React from "react";
import "../../styles/NavbarLogin.css";

const NavbarLogin = () => {
  return (
    <header>
      <div className="container between-flex">
        <div className="logo fw-bold">NEXTON</div>
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
              cursor: "pointer"
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="icons">
          <a href="#">
            <img src="../../assets/images" alt="User" />
          </a>
          <a href="#">
            <img src="path/to/cart-icon.png" alt="My Cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogin;
