import React from "react";
import ProductsCard from "../Products/ProductsCard";
import Pagination from "../Uitilys/Pagination";

const UserFavoriteProductse = () => {
  return (
    <div>
      <h1 className="page-title">Products Favorite</h1>
      <div className="responsive-grid-300">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <Pagination/>
    </div>
  );
};

export default UserFavoriteProductse;
