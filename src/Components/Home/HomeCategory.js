import React from "react";
import SubTitle from "../Uitilys/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import clothes1 from "../../assets/images/products/clothes-1.jpg";
import clothes2 from "../../assets/images/products/clothes-2.jpg";
import clothes3 from "../../assets/images/products/clothes-3.jpg";
import clothes4 from "../../assets/images/products/clothes-4.jpg";

const HomeCategory = () => {
  return (
    <div className="container">
      <SubTitle title="Category" btntitle="More" />
      <div className="responsive-grid-200">
        <CategoryCard title="Product" img={clothes1} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes2} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes3} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
        <CategoryCard title="Product" img={clothes4} background={"#F4DBA4"} />
      </div>
    </div>
  );
};

export default HomeCategory;
