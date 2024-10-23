import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  deleteProductToWishList,
} from "../../Redux/reducers/WishListSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const responseAdd = useSelector((state) => state.wishlist.addWishlistList);
  const responseRemove = useSelector(
    (state) => state.wishlist.deleteWishlistList
  );

  const handleFav = async () => {
    const newFavState = !isFav;
    setIsFav(newFavState);

    if (newFavState) {
      // if true, add to WishList
      await addToWishList();
    } else {
      // if false, remove
      await removeFromWishList();
    }
  };

  const addToWishList = async () => {
    const result = await dispatch(addProductToWishList({ productId: product._id }));

    // Check the result using `result.payload`, which contains the response from Redux
    if (result.payload && result.payload.status === "success") {
      toast.success(`${product.title} added to wishlist!`);
      setIsFav(true);
    } else {
      toast.error("Failed to add product to wishlist. Try again.");
    }
  };

  const removeFromWishList = async () => {
    const result = await dispatch(deleteProductToWishList({ productId: product._id }));

    // Check the result using `result.payload` as done in `addToWishList`
    if (result.payload && result.payload.status === "success") {
      toast.success(`${product.title} removed from wishlist!`);
      setIsFav(false);
    } else {
      toast.error("Failed to remove product from wishlist. Try again.");
    }
  };

  // Ensure the image has a valid URL or use a default image
  const imageUrl = product.imageCover
    ? `http://${product.imageCover}`
    : "default-image-url.png"; // Replace with your default image URL

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
          <img src={imageUrl} alt="Product" className="product-image" />
        </Link>
        <div className="favorite-icon" onClick={handleFav}>
          <FontAwesomeIcon
            icon={isFav ? faHeart : faHeartOutline}
            size="lg"
            className="fa-icon"
            style={{ color: isFav ? "red" : "gray" }}
          />
        </div>
      </div>

      <div className="between-flex">
        <h4>{product.title}</h4>
        <h4 className="price">${product.price}</h4>
      </div>
      <p>Accessories</p>

      <div className="rating">
        <span>{product.ratingsAverage || 0}</span> (
        {product.ratingsQuantity || 0})
      </div>

      <div className="add-to-cart">
        <FontAwesomeIcon icon={faShoppingCart} className="fa-icon" /> Add to
        Cart
      </div>
    </div>
  );
};

export default ProductsCard;
