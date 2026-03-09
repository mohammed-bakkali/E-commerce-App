import React, { useMemo } from "react";
import Spinner from "../Uitilys/Spinner";
import CategoryCard from "./CategoryCard";

const COLORS = [
  "#F4DBA5", "#55CFDF", "#FF6262", "#B3FF66",
  "#FFB366", "#66FFB3", "#FF66B3", "#6666FF", "#FFCC00",
];

const CategoryConatiner = ({ category, loading }) => {
  // Fix: assign colors once, not on every render (avoids color flicker)
  const coloredCategories = useMemo(() => {
    if (!category) return [];
    return category.map((el, i) => ({
      ...el,
      color: COLORS[i % COLORS.length],
    }));
  }, [category]);

  return (
    <div className="container">
      <div className="categories-page-header">
        <h2>All Categories</h2>
        <p>Browse all product categories</p>
      </div>
      <div className="dynamic-grid-layout mt-20">
        {loading ? (
          <Spinner />
        ) : coloredCategories.length > 0 ? (
          coloredCategories.map((el, index) => (
            <CategoryCard
              key={index}
              title={el.name}
              img={el.image}
              id={el.id}
              background={el.color}
            />
          ))
        ) : (
          <p style={{ color: "#aaa", fontSize: 14 }}>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryConatiner;