import React from "react";
import CategoryConatiner from "../../Components/Category/CategoryConatiner";
import Pagination from "../../Components/Uitilys/Pagination";
import useAddCategoryAgeHook from "../../Hook/category/add-category-page-hook";

const AllCategoryPage = () => {
  const { categories, totalPages, loading, handlePageClick } = useAddCategoryAgeHook();


  return (
    <div style={{ minHeight: " 670px" }}>
      <CategoryConatiner category={categories} loading={loading} />
      {totalPages > 1 ? (
        <Pagination totalPages={totalPages} onPageChange={handlePageClick} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
