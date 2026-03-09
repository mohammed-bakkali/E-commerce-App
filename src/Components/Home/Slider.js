import React, { useState, useEffect, useCallback } from "react";
import "../../styles/Slider.css";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/slide-1.webp";

const slides = [
  {
    img:     banner1,
    badge:   "New Arrival",
    title:   "Exclusive Collection\nFor Everyone",
    price:   "$49.99",
  },
  {
    img:     banner2,
    badge:   "Best Sellers",
    title:   "Top Picks of\nThe Season",
    price:   "$39.99",
  },
  {
    img:     banner3,
    badge:   "Limited Offer",
    title:   "Premium Fashion\nAt Great Prices",
    price:   "$59.99",
  },
  {
    img:     banner4,
    badge:   "Trending Now",
    title:   "Shop The Latest\nStyles Today",
    price:   "$29.99",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % slides.length), []);

  const prev = () =>
    setCurrent((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const { img, badge, title, price } = slides[current];

  return (
    <div className="slider-container">
      {/* Slide */}
      <div
        className="slider-content"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="slider-overlay" />

        <div className="slider-text">
          <span className="slider-badge">{badge}</span>
          <h1>{title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</h1>
          <p className="slider-price">Starting from <span>{price}</span></p>
          <Link to="/products">
            <button className="explore-button">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button className="slider-arrow slider-arrow-left" onClick={prev}>‹</button>
      <button className="slider-arrow slider-arrow-right" onClick={next}>›</button>

      {/* Dots */}
      <div className="slider-navigation">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`nav-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;