import React from "react";
import Pagination from "../../Components/Uitilys/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";

const AllBrandPage = () => {
  return (
    <div className="container">
      <div style={{ minHeight: " 670px" }}>
        <BrandContainer />
        <Pagination />
      </div>
    </div>
  );
};

export default AllBrandPage;
