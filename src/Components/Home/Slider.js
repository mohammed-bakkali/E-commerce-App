import React, { useState } from "react";
import "../../styles/Slider.css";

import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/slide-1.webp";

const Slider = () => {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="slider-text">
          <p>Starting from: $49.99</p>
          <h1>Exclusive collection for everyone</h1>
          <button className="explore-button">Explore now</button>
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
