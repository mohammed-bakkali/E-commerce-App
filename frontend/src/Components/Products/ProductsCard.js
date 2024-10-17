import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the icons
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";

const ProductsCard = ({ element }) => {
  // Ensure the image has a valid URL or use a default image
  const imageUrl = element.imageCover

    ? `http://${element.imageCover}`
    : "default-image-url.png"; // Replace with your default image URL
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/products/${element._id}`} style={{ textDecoration: "none" }}>
          <img src={imageUrl} alt="Product" className="product-image" />
        </Link>
        <div className="favorite-icon">
          <FontAwesomeIcon icon={faHeart} size="lg" className="fa-icon" />
        </div>
      </div>

      <div className="between-flex">
        <h4>{element.title}</h4>
        <h4 className="price">${element.price}</h4>
      </div>
      <p>Accessories</p>

      <div className="rating">
        <span>{element.ratingsAverage || 0}</span> (
        {element.ratingsQuantity || 0})
      </div>

      <div className="add-to-cart">
        <FontAwesomeIcon icon={faShoppingCart} className="fa-icon" /> Add to
        Cart
      </div>
    </div>
  );
};

export default ProductsCard;
