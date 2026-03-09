import React from "react";
import "../../styles/CategoryHeader.css";
import useAddCategoryPageHook from "../../Hook/category/add-category-page-hook";
import { NavLink } from "react-router-dom";

const CategoryHeader = () => {
  const { categories } = useAddCategoryPageHook();

  return (
    <div className="header">
      <div className="container">
        {categories?.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/products/category/${cat.id}`}
            className={({ isActive }) =>
              `header-item${isActive ? " header-item-active" : ""}`
            }
          >
            {cat.name}
          </NavLink>
        ))}
        <NavLink
          to="/allcategory"
          className={({ isActive }) =>
            `header-item${isActive ? " header-item-active" : ""}`
          }
        >
          All Categories
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryHeader;