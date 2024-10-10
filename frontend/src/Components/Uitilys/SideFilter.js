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

  let localFrom = localStorage.getItem("priceFrom") || "";
  let localTo = localStorage.getItem("priceTo") || "";



  return (
    <aside className="sidebar active">
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li>
            <input onChange={clickCategory} value="0" type="checkbox" /> All
          </li>
          {categories && categories.length > 0 ? (
            categories.map((item) => (
              <li key={item._id}>
                <input
                  onChange={clickCategory}
                  value={item._id}
                  type="checkbox"
                />{" "}
                {item.name}
              </li>
            ))
          ) : (
            <h6>No categories available</h6>
          )}
        </ul>
      </div>
      <div className="filter-brand">
        <h3>Brand</h3>
        <ul>
          <li>
            <input onChange={clickBrand} type="checkbox" value="Nike" /> All
          </li>
          {brands && brands.length > 0 ? (
            brands.map((item) => (
              <li key={item._id}>
                <input onChange={clickBrand} value={item._id} type="checkbox" />{" "}
                {item.name}
              </li>
            ))
          ) : (
            <h6>No brands available</h6>
          )}
        </ul>
      </div>

      <div className="price-range">
        <h3>Price </h3>
        <div className="price-inputs">
          <input
            value={localFrom}
            onChange={handlePriceFromChange}
            type="number"
            placeholder="Min price"
          />
          <input
            value={localTo}
            onChange={handlePriceToChange}
            type="number"
            placeholder="Max price"
          />
        </div>
      </div>
      <div className="clear-filters">
        <button onClick={handleClearFilter} type="button" class="clear-btn">
          clear filters
        </button>
      </div>
    </aside>
  );
};

export default SideFilter;
