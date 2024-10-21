import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToWishList } from "../../Redux/reducers/WishListSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ element }) => {
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFavourite = async () => {
    if (loading) return;

    setLoading(true);
    setFav((prevFav) => !prevFav);

    const productData = {
      productId: element._id,
    };
    try {
      const res = await dispatch(addProductToWishList({ body: productData }));
      console.log("teset", res);
      if (res && res.type === "wishlist/addProductToWishList/fulfilled") {
        toast.success("Product added to wishlist successfully");
      } else {
        toast.error("Could not add product to wishlist. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to add product to wishlist");
    } finally {
      setLoading(false);
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
        <div className="favorite-icon">
          <FontAwesomeIcon
            onClick={handleFavourite}
            // condition ? value_if_true : value_if_false;
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
