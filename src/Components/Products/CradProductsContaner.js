import React from "react";
import SubTitle from "../Uitilys/SubTitle";
import ProductsCard from "./ProductsCard";
const CradProductsContaner = ({title, btntitle}) => {
  return (
    <div className="container">
      <SubTitle title={title} btntitle={btntitle} />
      <div className="responsive-grid-250">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
};

export default CradProductsContaner;
