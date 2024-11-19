import React from "react";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitilys/SubTitle";
import useHomeBrandHooks from "../../Hook/brand/home-brand-hook";
import Spinner from "../Uitilys/Spinner"; 

// Page Home
const BrandFeatured = ({ title, btntitle, pathText }) => {
  const { brands, loading } = useHomeBrandHooks();

  return (
    <div className="container">
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <div className="responsive-grid-250 mb-20 mt-20">
        {loading === false ? (
          brands.length > 0 ? (
            brands
              .slice(0,5)
              .map((el, index) => (
                <BrandCard
                  key={index}
                  title={el.name}
                  img={el.image}
                  id={el.id}
                  background={"#F4DBA4"}
                />
              ))
          ) : (
            <p>No brands available</p>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default BrandFeatured;
