import React from "react";
import "../../styles/SearchCountResult.css";
import UnopDropdown from "unop-react-dropdown";
import sortIcon from "../../assets/icons/sort.png";

const SearchCountResult = ({ title }) => {
  const handleDropdown = () => {};

  return (
    <div className="container">
      <div className="header-container">
        <div className="dropdown-container">
          <UnopDropdown
            onAppear={handleDropdown}
            onDisappearStart={handleDropdown}
            trigger={
              <p className="dropdown-trigger">
                <img
                  width="20"
                  height="20"
                  className="icon"
                  src={sortIcon}
                  alt="Sort"
                />
                Sort by
              </p>
            }
            delay={0}
            align="CENTER"
            hover
          >
            <div className="dropdown-menu">
              <div className="dropdown-item">Best Sellers</div>
              <div className="dropdown-item">Highest Rated</div>
              <div className="dropdown-item">Price: Low to High</div>
              <div className="dropdown-item">Price: High to Low</div>
            </div>
          </UnopDropdown>
        </div>
        <div className="header-title">{title}</div>
      </div>
    </div>
  );
};

export default SearchCountResult;
