import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import "../../styles/SideFilter.css";

const SideFilter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        console.log('TSEST')
        setIsVisible(true);
      } 
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faFilter} />
      </button>
      <aside className={`sidebar ${isVisible ? 'active' : ''}`}>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li><input type="checkbox" /> Men's fashion</li>
            <li><input type="checkbox" /> Women's fashion</li>
            <li><input type="checkbox" /> Kids & Toys</li>
            <li><input type="checkbox" /> Accessories</li>
            <li><input type="checkbox" /> Cosmetics</li>
            <li><input type="checkbox" /> Shoes</li>
            <li><input type="checkbox" /> Sports</li>
          </ul>
        </div>
        <div className="price-range">
          <h3>Price range</h3>
          <input type="range" min="100" max="500" step="10" />
          <div className="price-inputs ">
            <input type='number'  placeholder="Min price" min="100" max="500" />
            <input type='number'  placeholder="Max price" min="100" max="500" />
          </div>
        </div>
        <div className="sort-order">
          <h3>Sort order</h3>
          <ul>
            <li><input type="radio" name="sort" /> Most Popular</li>
            <li><input type="radio" name="sort" /> Best Rating</li>
            <li><input type="radio" name="sort" /> Newest</li>
            <li><input type="radio" name="sort" /> Price Low - High</li>
            <li><input type="radio" name="sort" /> Price High - Low</li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideFilter;
