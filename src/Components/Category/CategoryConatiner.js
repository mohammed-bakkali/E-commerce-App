import React from "react";
import clothes1 from "../../assets/images/products/clothes-1.jpg";
import clothes2 from "../../assets/images/products/clothes-2.jpg";
import clothes3 from "../../assets/images/products/clothes-3.jpg";
import clothes4 from "../../assets/images/products/clothes-4.jpg";
import CategoryCard from "./CategoryCard";
const CategoryConatiner = () => {
  return (
    <div className="container">
      <div className="responsive-grid-200">
        <CategoryCard title="Product" img={clothes1} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes2} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes3} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes3} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes1} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes2} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes3} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes3} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
      </div>
    </div>
  );
};

export default CategoryConatiner;
