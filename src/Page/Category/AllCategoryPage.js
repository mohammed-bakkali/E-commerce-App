import React from "react";
import CategoryConatiner from "../../Components/Category/CategoryConatiner";
import Pagination from "../../Components/Uitilys/Pagination";
import useAddCategoryAgeHook from "../../Hook/category/add-category-page-hook";

import { useNavigate } from "react-router-dom";

const AllCategoryPage = () => {
  const navigate = useNavigate();
  const { categories, totalPages, loading, handlePageClick } = useAddCategoryAgeHook();
  
  return (
    <div style={{ minHeight: "670px" }}>
      <div className="container mt-3">
      <button
          onClick={() => navigate(-1)}
          className="btn d-flex align-items-center gap-2"
          style={{
            marginTop: "10px",
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
      <CategoryConatiner category={categories} loading={loading} />
      {totalPages > 1 ? (
        <Pagination totalPages={totalPages} onPageChange={handlePageClick} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
