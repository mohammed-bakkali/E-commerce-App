import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitilys/SearchCountResult";
import SideFilter from "../../Components/Uitilys/SideFilter";
import CradProductContent from "../../Components/Products/CradProductContent";
import Pagination from "../../Components/Uitilys/Pagination";
import useViewSearchProductsHook from "../../Hook/product/view-search-products";

const ShopProductsPage = () => {
  const { items, paginationInfo, onPageChange, getProduct } = useViewSearchProductsHook();

  const totalPages = paginationInfo ? paginationInfo : 0;

  return (
    <div>
      <CategoryHeader />
      <SearchCountResult onClick={getProduct} title={`${items.length} results search...`} />
      <div className="container d-flex column-direction">
        <div className="">
          <SideFilter />
        </div>
        <div className="" style={{ flex: "1" }}>
          <CradProductContent products={items} />
        </div>
      </div>
      {totalPages >= 1 ? (
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      ) : null}
    </div>
  );
};

export default ShopProductsPage;
