// Page Import All Pages
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CradProductsContainer from "../../Components/Products/CradProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import useViewHomeProductsHook from "../../Hook/product/view-home-products-hook";


const HomePage = () => {

const { items } = useViewHomeProductsHook();
  

  return (
    <div>
      <Slider />
      <HomeCategory />
      <CradProductsContainer products={items} title="Best seller" btntitle="More" pathText="/products" />
      <CradProductsContainer products={items}  title="We chose for you" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Most rated" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Events Fashion" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Best seller" btntitle="More" pathText="/products" />
      <DiscountSection />
      <BrandFeatured title="Most famous brands" btntitle="More" pathText="/products" />
    </div>
  );
};

export default HomePage;
