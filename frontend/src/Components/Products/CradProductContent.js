import React from "react";
import ProductsCard from "./ProductsCard";

const CradProductContent = ({ products }) => {
  return (
    <div className="responsive-grid-280">
      {

        
        
  products  ?  products.map((element, index) => (<ProductsCard key={index} product={products} element={element}/>)): null
        
        
        }
    </div>
  );
};

export default CradProductContent;
