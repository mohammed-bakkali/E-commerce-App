import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductToWishList,
  deleteProductToWishList,
} from "../../Redux/reducers/WishListSlice";
import { toast } from "react-toastify";
import favon from "../../assets/icons/fav-on.png";
import favoff from "../../assets/icons/fav-off.png";

const ProductsCard = ({ element, favoriteProds }) => {
  const [favImg, setFavImg] = useState(favoff);
  

  const Fav = favoriteProds.some((idProduct) => idProduct === element._id); // true

  const [isFav, setIsFav] = useState(Fav);

  const dispatch = useDispatch();

  const handelFav = () => {
    if (isFav) {
      deleteToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  

  // add
  const addToWishListData = async () => {
    const result = await dispatch(
      addProductToWishList({ productId: element._id })
    );
    // Check the result using `result.payload`, which contains the response from Redux
    if (result.payload && result.payload.status === "success") {
      toast.success(`${element.title} has been added to the wishlist!`);
      setIsFav(true);
      setFavImg(favon);
    } else {
      toast.error(
        "Failed to add the product to the wishlist. Please try again."
      );
    }
  };

  // Delete
  const deleteToWishListData = async () => {
    const result = await dispatch(
      deleteProductToWishList({ productId: element._id })
    );

    // Check the result using `result.payload` as explained in `addToWishListData`
    if (result.payload && result.payload.status === "success") {
      toast.success(`${element.title} has been removed from the wishlist!`);
      setIsFav(false);
      setFavImg(favoff);
    } else {
      toast.error(
        "Failed to remove the product from the wishlist. Please try again."
      );
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
          <img
            src={favImg}
            alt=""
            onClick={handelFav}
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
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
const responseAdd = useSelector((state) => state.wishlist.addWishlistList);
const responseRemov = useSelector(
  (state) => state.wishlist.deleteWishlistList
);