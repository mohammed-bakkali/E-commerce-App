import React from "react";
import "../../styles/CategoryHeader.css";
import useAddCategoryPageHook from "../../Hook/category/add-category-page-hook";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  const { categories, totalPages, loading, handlePageClick } = useAddCategoryPageHook();

  
  return (
    <div className="header">
      <div className="container">
        { 
          categories ? (
            categories.map((cat, index) => (
            (  <Link to={`/products/category/${cat.id}`}>
                <div className="header-item" key={index}>{cat.name}</div>
              </Link>
            )
            ))
          ) : null
        }
        <Link to="/allcategory">
          <div className="header-item">Others</div>
        </Link>
        
      </div>
    </div>
  );
};

export default CategoryHeader;
