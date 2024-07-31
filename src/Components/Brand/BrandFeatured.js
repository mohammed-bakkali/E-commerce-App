import React from "react";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitilys/SubTitle";
import brand1 from "../../assets/images/Brand/1.png"
import brand2 from "../../assets/images/Brand/2.png"
import brand3 from "../../assets/images/Brand/3.png"
import brand4 from "../../assets/images/Brand/4.png"
import brand5 from "../../assets/images/Brand/5.png"
import brand6 from "../../assets/images/Brand/6.png"

const BrandFeatured = ({title, btntitle}) => {
  return (
    <div className="container">
      <SubTitle title={title} btntitle={btntitle} />
      <div className="responsive-grid-250 mb-20">
        <BrandCard  img={brand1}/>
        <BrandCard  img={brand2}/>
        <BrandCard  img={brand3}/>
        <BrandCard  img={brand4}/>
        <BrandCard  img={brand5}/>
        <BrandCard  img={brand6}/>
        <BrandCard  img={brand6}/>
        <BrandCard  img={brand6}/>
      </div>
    </div>
  );
};

export default BrandFeatured;
