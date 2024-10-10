import React from "react";
import Pagination from "../../Components/Uitilys/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";
import useAddBrandPageHook from "../../Hook/brand/add-brand-page";

const AllBrandPage = () => {
  const { brands, totalPages, loading, handlePageClick } =
    useAddBrandPageHook();

  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <div style={{ minHeight: " 670px" }}>
        <BrandContainer brand={brands} loading={loading} />
        {totalPages > 1 ? (
          <Pagination totalPages={totalPages} onPageChange={handlePageClick} />
        ) : null}
      </div>
    </div>
  );
};

export default AllBrandPage;
