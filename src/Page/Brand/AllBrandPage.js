import React from "react";
import Pagination from "../../Components/Uitilys/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";
import useAddBrandPageHook from "../../Hook/brand/add-brand-page";

const AllBrandPage = () => {
  const { brands, pagination, loading, onPageChange } =
    useAddBrandPageHook();

    const totalPages = pagination || 0;

  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <div style={{ minHeight: " 670px" }}>
        <BrandContainer brand={brands} loading={loading} />
        {pagination > 1 ? (
          <Pagination totalPages={totalPages} onPageChange={onPageChange} />
        ) : null}
      </div>
    </div>
  );
};

export default AllBrandPage;
