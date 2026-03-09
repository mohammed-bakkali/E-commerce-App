import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Uitilys/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";
import useAddBrandPageHook from "../../Hook/brand/add-brand-page";

const AllBrandPage = () => {
  const navigate = useNavigate();
  const { brands, pagination, loading, onPageChange } = useAddBrandPageHook();
  const totalPages = pagination || 0;

  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <div className="container mt-3">
        <button
          onClick={() => navigate(-1)}
          className="btn d-flex align-items-center gap-2"
          style={{
            background: "none",
            border: "1.5px solid #ddd",
            borderRadius: "8px",
            padding: "6px 16px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#444",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#f5f5f5";
            e.currentTarget.style.borderColor = "#bbb";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "none";
            e.currentTarget.style.borderColor = "#ddd";
          }}
        >
          <span style={{ fontSize: "16px" }}>&#8592;</span>
          <span>Back</span>
        </button>
      </div>

      <BrandContainer brand={brands} loading={loading} />

      {pagination > 1 ? (
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      ) : null}
    </div>
  );
};

export default AllBrandPage;