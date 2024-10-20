import React, { useState, useEffect } from "react";
import "../../styles/Slider.css";

import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/slide-1.webp";

const Slider = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center", 
        }}
      >
        <div className="slider-text">
          <p>Starting from: $49.99</p>
          <h1>Exclusive collection for everyone</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellat quo eaque alias corporis sunt, facilis nesciunt rem fugit!</p>
          <button className="explore-button mt-40">Explore now</button>
        </div>
      </div>
      <div className="slider-navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
