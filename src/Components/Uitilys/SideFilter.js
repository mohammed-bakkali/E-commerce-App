import useSideFilterSearchHook from "../../Hook/search/sideFilter-search-hook";
import "../../styles/SideFilter.css";

const SideFilter = () => {
  const {
    categories,
    brands,
    clickCategory,
    clickBrand,
    handlePriceFromChange,
    handlePriceToChange,
    handleClearFilter,
  } = useSideFilterSearchHook();

  const localFrom = localStorage.getItem("priceFrom") || "";
  const localTo   = localStorage.getItem("priceTo")   || "";

  return (
    <aside className="sidebar active">

      {/* Categories */}
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul>
          <li>
            <input onChange={clickCategory} value="0" type="checkbox" /> All
          </li>
          {categories && categories.length > 0 ? (
            categories.map((item) => (
              <li key={item._id}>
                <input onChange={clickCategory} value={item._id} type="checkbox" />
                {item.name}
              </li>
            ))
          ) : (
            <p style={{ fontSize: 13, color: "#aaa" }}>No categories</p>
          )}
        </ul>
      </div>

      {/* Brands */}
      <div className="sidebar-section">
        <h3>Brand</h3>
        <ul>
          <li>
            <input onChange={clickBrand} type="checkbox" value="0" /> All
          </li>
          {brands && brands.length > 0 ? (
            brands.map((item) => (
              <li key={item._id}>
                <input onChange={clickBrand} value={item._id} type="checkbox" />
                {item.name}
              </li>
            ))
          ) : (
            <p style={{ fontSize: 13, color: "#aaa" }}>No brands</p>
          )}
        </ul>
      </div>

      {/* Price */}
      <div className="sidebar-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input
            value={localFrom}
            onChange={handlePriceFromChange}
            type="number"
            placeholder="Min"
          />
          <input
            value={localTo}
            onChange={handlePriceToChange}
            type="number"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Clear */}
      <div className="sidebar-section" style={{ padding: "10px 16px" }}>
        <button onClick={handleClearFilter} type="button" className="clear-btn">
          Clear Filters
        </button>
      </div>

    </aside>
  );
};

export default SideFilter;