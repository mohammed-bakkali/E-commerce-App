import React from "react";
import "../../styles/SearchCountResult.css";
import UnopDropdown from "unop-react-dropdown";
import sortIcon from "../../assets/icons/sort.png";

const SearchCountResult = ({ title, onClick }) => {
  const handleDropdown = () => {};

  const handleSort = (key) => {
  localStorage.setItem("sortType", key);
  onClick(); // Re-fetch the products with the new sort type
  }
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
              <div className="dropdown-item" onClick={() => handleSort("no_sort")}>No Sort</div>
              <div className="dropdown-item" onClick={() => handleSort("best_sellers")}>Best Sellers</div>
              <div className="dropdown-item" onClick={() => handleSort("highest_rated")}>Highest Rated</div>
              <div className="dropdown-item" onClick={() => handleSort("price_low_to_high")}>Price: Low to High</div>
              <div className="dropdown-item" onClick={() => handleSort("price_high_to_low")}>Price: High to Low</div>
              <div className="dropdown-item" onClick={() => handleSort("newest")}>Newest</div>
              <div className="dropdown-item" onClick={() => handleSort("oldest")}>Oldest</div>
              <div className="dropdown-item" onClick={() => handleSort("quantity_low_to_high")}>Quantity: Low to High</div>
              <div className="dropdown-item" onClick={() => handleSort("quantity_high_to_low")}>Quantity: High to Low</div>
            </div>

          </UnopDropdown>
        </div>
        <div className="header-title">{title}</div>
      </div>
    </div>
  );
};

export default SearchCountResult;
