import React from "react";
import CategoryConatiner from "../../Components/Category/CategoryConatiner";
import Pagination from "../../Components/Uitilys/Pagination";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: " 670px" }}>
      <CategoryConatiner />
      <Pagination/>
    </div>
  );
};

export default AllCategoryPage;
