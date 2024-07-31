// Page Import All Pages
import React from "react";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

const HomePage = () => {
  return (
    <div>
      <NavbarLogin />
      <Slider />
      <HomeCategory/>
    </div>
  );
};

export default HomePage;
