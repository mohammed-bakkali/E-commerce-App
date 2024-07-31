// Page Import All Pages
import React from "react";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CradProductsContaner from "../../Components/Products/CradProductsContaner";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Uitilys/Footer";

const HomePage = () => {
  return (
    <div>
      <NavbarLogin />
      <Slider />
      <HomeCategory />
      <CradProductsContaner title="Best seller" btntitle="More" />
      <CradProductsContaner title="We chose for you" btntitle="More" />
      <CradProductsContaner title="Most rated" btntitle="More" />
      <CradProductsContaner title="Events Fashion" btntitle="More" />
      <CradProductsContaner title="Best seller" btntitle="More" />
      <DiscountSection/>
      <BrandFeatured title="Most famous brands" btntitle="More"/>
      <Footer/>
    </div>
  );
};

export default HomePage;
