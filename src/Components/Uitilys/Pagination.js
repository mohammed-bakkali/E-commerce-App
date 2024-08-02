import React from "react";
import ReactPaginate from "react-paginate";
import "../../styles/Pagination.css"; // Adjust the path as necessary

const Pagination = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={100}
      previousLabel="Previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      disabledClassName={"disabled"}
    />
  );
};

export default Pagination;
