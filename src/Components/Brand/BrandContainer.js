import React from "react";
import BrandCard from "./BrandCard";

// Page allbrand (Paginations)
const BrandContainer = ({ brand }) => {
  return (
    <div className="container">
      <div className="responsive-grid-250 mb-20 mt-20">
        {brand.length > 0 ? (
          brand.map((el,index) => (
            <BrandCard
              key={index} 
              title={el.name}
              img={el.image}
              id={el.id}
              background={"#F4DBA4"}
            />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default BrandContainer;
