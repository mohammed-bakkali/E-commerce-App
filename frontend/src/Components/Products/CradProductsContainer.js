import React from "react";
import SubTitle from "../Uitilys/SubTitle";
import CradProductContent from "./CradProductContent";
const CradProductsContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <div className="container">
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <CradProductContent  products={products} />
    </div>
  );
};
export default CradProductsContainer;
