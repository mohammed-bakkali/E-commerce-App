import React from "react";
import ReactPaginate from "react-paginate";
import "../../styles/Pagination.css"; // Adjust the path as necessary

const Pagination = ({ totalPages, onPageChange }) => {
  const handlePageClick = (event) => {
    onPageChange(event.selected + 1); // Pass the page number to the parent component
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={totalPages}
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
