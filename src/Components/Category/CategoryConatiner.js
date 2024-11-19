import React from "react";
import Spinner from "../Uitilys/Spinner";
import CategoryCard from "./CategoryCard";

const CategoryConatiner = ({ category, loading }) => {
  const colors = [
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#B3FF66",
    "#FFB366",
    "#66FFB3",
    "#FF66B3",
    "#6666FF",
    "#FFCC00",
  ];

  return (
    <div className="container">
      <div className="dynamic-grid-layout mt-20">
        {loading === false ? (
          category.length > 0 ? (
            category.map((el, index) => (
              <CategoryCard
                key={index}
                title={el.name}
                img={el.image}
                id={el.id}
                background={colors[Math.floor(Math.random() * colors.length)]}
              />
            ))
          ) : (
            <p>No categories available</p>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default CategoryConatiner;
