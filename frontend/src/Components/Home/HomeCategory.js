import React from "react";
import SubTitle from "../Uitilys/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import Spinner from "../Uitilys/Spinner"; // Import the spinner
import useHomeCategoryHooks from "../../Hook/category/home-category-hooks";
const HomeCategory = () => {
  const { categories, loading, colors } = useHomeCategoryHooks();

  // Page Home
  return (
    <div className="container">
      <SubTitle title="Category" btntitle="More" pathText="allcategory" />
      <div className="dynamic-grid-layout">
        {loading === false ? (
          categories.length > 0 ? (
            categories
              .slice(0, 7)
              .map((el, index) => (
                <CategoryCard
                  key={index}
                  title={el.name}
                  img={el.image}
                  background={colors[index]}
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

export default HomeCategory;
