import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishList } from "../../Redux/reducers/WishListSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ element }) => {
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const res = useSelector((state) => state.wishlist.addWishlistList);
  console.log("wishlist response:", res);

  const handelFav = async () => {
    const newFavState = !fav; 
    setFav(newFavState); 

    if (newFavState) {
      // if true add to WishLis
      await addToWishListData();
    } else {
      // remove
      toast.info(`${element.title} has been removed from your wishlist.`);
    }
  };

  const addToWishListData = async () => {
    try {
      await dispatch(addProductToWishList({ id: element._id }));
      toast.success(`${element.title} has been added to your wishlist!`);
    } catch (error) {
      toast.error("Error adding product to wishlist.");
    }
  };

  // Ensure the image has a valid URL or use a default image
  const imageUrl = element.imageCover
    ? `http://${element.imageCover}`
    : "default-image-url.png"; // Replace with your default image URL

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link
          to={`/products/${element._id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={imageUrl} alt="Product" className="product-image" />
        </Link>
        <div className="favorite-icon" onClick={handelFav}>
          <FontAwesomeIcon
            icon={fav ? faHeart : faHeartOutline}
            size="lg"
            className="fa-icon"
            style={{ color: fav ? "red" : "gray" }}
          />
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
