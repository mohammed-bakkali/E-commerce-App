import React from "react";
import BrandCard from "./BrandCard";
import brand1 from "../../assets/images/Brand/brand1.png";
import brand2 from "../../assets/images/Brand/brand2.png";
import brand3 from "../../assets/images/Brand/brand3.png";
import brand4 from "../../assets/images/Brand/brand4.png";
import brand5 from "../../assets/images/Brand/brand5.png";
import brand6 from "../../assets/images/Brand/brand5.png";

const BrandContainer = () => {
  return (
    <div className="container">
      <div className="responsive-grid-250 mb-20 mt-20">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
        <BrandCard img={brand6} />
        <BrandCard img={brand6} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
        <BrandCard img={brand5} />
        <BrandCard img={brand6} />
        <BrandCard img={brand6} />
        <BrandCard img={brand6} />
      </div>
    </div>
  );
};

export default BrandContainer;
