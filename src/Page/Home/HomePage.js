// Page Import All Pages
import React, { useEffect, useState } from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CradProductsContainer from "../../Components/Products/CradProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import useViewHomeProductsHook from "../../Hook/product/view-home-products-hook";
import Services from "../../Components/Home/Services ";
import Testimonials from "../../Components/Home/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {

const { items } = useViewHomeProductsHook();
const [showButton, setShowButton] = useState(false);

  // Handle scroll to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <>
      <Slider />
      <Services/>
      <HomeCategory />
      <CradProductsContainer products={items} title="Best seller" btntitle="More" pathText="/products" />
      <CradProductsContainer products={items}  title="We chose for you" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Most rated" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Events Fashion" btntitle="More" pathText="/products" />
      <CradProductsContainer title="Best seller" btntitle="More" pathText="/products" />
      <DiscountSection />
      <Testimonials/>
      <BrandFeatured title="Most famous brands" btntitle="More" pathText="/products" />
      {/* Back to Top Button */}
      {showButton && (
  <button
    onClick={scrollToTop}
    title="Back to Top"
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      fontSize: "18px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      opacity: showButton ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
    }}
  >
    <FontAwesomeIcon style={{padding: "10px",}} icon={faCircleUp} />
  </button>
)}

    </>
  );
};

export default HomePage;
