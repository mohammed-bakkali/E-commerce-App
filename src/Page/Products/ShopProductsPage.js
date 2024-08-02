import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitilys/SearchCountResult";
import SideFilter from "../../Components/Uitilys/SideFilter";
import CradProductContent from "../../Components/Products/CradProductContent";
import Pagination from "../../Components/Uitilys/Pagination";

const ShopProductsPage = () => {
  return (
    <div>
      <CategoryHeader />
      <SearchCountResult title="200 results search..." />
      <div className="container d-flex column-direction">
        <div className="">
          <SideFilter />
        </div>
        <div className="" style={{ flex: "1" }}>
          <CradProductContent />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ShopProductsPage;
