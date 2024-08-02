import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductsDetalis from "../../Components/Products/ProductsDetalis";
import RateContainer from "../../Components/Rate/RateContainer";

const ProductsDetalisPage = () => {
  return (
    <>
      <CategoryHeader />
      <div className="container">
        <ProductsDetalis />
        <RateContainer/>
      </div>
    </>
  );
};

export default ProductsDetalisPage;
