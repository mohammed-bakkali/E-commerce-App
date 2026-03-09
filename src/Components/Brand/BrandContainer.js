import React from "react";
import BrandCard from "./BrandCard";
import Spinner from "../Uitilys/Spinner";

const BrandContainer = ({ brand, loading }) => {
  return (
    <div className="container">
      <div className="brands-page-header">
        <h2>All Brands</h2>
        <p>Explore products from your favourite brands</p>
      </div>
      <div className="responsive-grid-200 mb-20 mt-20">
        {loading ? (
          <Spinner />
        ) : brand && brand.length > 0 ? (
          brand.map((el, index) => (
            <BrandCard
              key={index}
              title={el.name}
              img={el.image}
              id={el.id}
            />
          ))
        ) : (
          <p style={{ color: "#aaa", fontSize: 14 }}>No brands available</p>
        )}
      </div>
    </div>
  );
};

export default BrandContainer;