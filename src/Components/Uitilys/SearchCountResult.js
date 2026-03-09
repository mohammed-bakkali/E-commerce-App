import React from "react";
import "../../styles/SearchCountResult.css";
import UnopDropdown from "unop-react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const sortOptions = [
  { key: "no_sort",               label: "Default"                },
  { key: "best_sellers",          label: "Best Sellers"           },
  { key: "highest_rated",         label: "Highest Rated"          },
  { key: "price_low_to_high",     label: "Price: Low → High"      },
  { key: "price_high_to_low",     label: "Price: High → Low"      },
  { key: "newest",                label: "Newest First"           },
  { key: "oldest",                label: "Oldest First"           },
  { key: "quantity_low_to_high",  label: "Stock: Low → High"      },
  { key: "quantity_high_to_low",  label: "Stock: High → Low"      },
];

const SearchCountResult = ({ title, onClick }) => {
  const handleSort = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };

  return (
    <div className="container">
      <div className="search-result-bar">
        {/* Results count */}
        <div className="header-title">{title}</div>

        {/* Sort dropdown */}
        <UnopDropdown
          onAppear={() => {}}
          onDisappearStart={() => {}}
          trigger={
            <div className="dropdown-trigger">
              <FontAwesomeIcon icon={faSlidersH} className="icon" />
              Sort by
              <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10, opacity: 0.5 }} />
            </div>
          }
          delay={0}
          align="RIGHT"
          hover
        >
          <div className="dropdown-menu">
            {sortOptions.map(({ key, label }) => (
              <div
                key={key}
                className="dropdown-item"
                onClick={() => handleSort(key)}
              >
                {label}
              </div>
            ))}
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;