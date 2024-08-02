// Page Import All Pages
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CradProductsContaner from "../../Components/Products/CradProductsContaner";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CradProductsContaner title="Best seller" btntitle="More" pathText="/products" />
      <CradProductsContaner title="We chose for you" btntitle="More" pathText="/products" />
      <CradProductsContaner title="Most rated" btntitle="More" pathText="/products" />
      <CradProductsContaner title="Events Fashion" btntitle="More" pathText="/products" />
      <CradProductsContaner title="Best seller" btntitle="More" pathText="/products" />
      <DiscountSection />
      <BrandFeatured title="Most famous brands" btntitle="More" pathText="/products" />
    </div>
  );
};

export default HomePage;
