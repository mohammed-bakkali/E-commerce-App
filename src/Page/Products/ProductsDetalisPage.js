import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductsDetalis from "../../Components/Products/ProductsDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import CradProductContainer from "../../Components/Products/CradProductsContainer";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";
import { useParams } from "react-router-dom";
const ProductsDetalisPage = () => {
  const { id } = useParams();
  
  const  { item, selectedProductLike } = useViewProductsDetailsHook(id)
  
  let rateAvg = 0;
  let rateQty = 0;
  
  if (item) {
    rateAvg = item.ratingsAverage || 0;
    rateQty = item.ratingsQuantity || 0;
  }
  

  return (
    <>
      <CategoryHeader />
      <div className="container">
        <ProductsDetalis  />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
        {selectedProductLike && selectedProductLike.length > 0 ? (
          <CradProductContainer title="Products you may like" products={selectedProductLike.slice(0, 4)} />
        ) : (
          <p className="mt-20 mb-20">No similar products available at the moment.</p>
        )}
      </div>
    </>
  );
};

export default ProductsDetalisPage;
