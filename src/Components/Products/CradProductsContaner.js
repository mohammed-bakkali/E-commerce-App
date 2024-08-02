import React from "react";
import SubTitle from "../Uitilys/SubTitle";
import CradProductContent from "./CradProductContent";
const CradProductsContaner = ({ title, btntitle, pathText }) => {
  return (
    <div className="container">
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <CradProductContent  />
    </div>
  );
};

export default CradProductsContaner;
