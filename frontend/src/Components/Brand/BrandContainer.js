import React from "react";
import BrandCard from "./BrandCard";
import Spinner from "../Uitilys/Spinner";

// Page allbrand (Paginations)
const BrandContainer = ({ brand, loading }) => {
  return (
    <div className="container">
      <div className="responsive-grid-250 mb-20 mt-20">
        {loading === false ? (
          brand.length > 0 ? (
            brand.map((el, index) => (
              <BrandCard
                key={index}
                title={el.name}
                img={el.image}
                background={"#F4DBA4"}
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

export default BrandContainer;
