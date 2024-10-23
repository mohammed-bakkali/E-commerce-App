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

const ProductsCard = ({ element, favoriteProds }) => {
  // const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const responseAdd = useSelector((state) => state.wishlist.addWishlistList);
  const responseRemov = useSelector(
    (state) => state.wishlist.deleteWishlistList
  );

  const handelFav = async () => {

    const hasGreaterThanThree = numbers.some((num) => num > 3);

    if (favoriteProds.some(idProduct => idProduct === element._id)) {
      
    }



    // const newFavState = !fav;
    setFav(newFavState);

    if (newFavState) {
      // if true add to WishLis
      await addToWishListData();
    } else {
      // remove id false
      await deleteToWishListData();
    }
  };
  const addToWishListData = async () => {
    const result = await dispatch(
      addProductToWishList({ productId: element._id })
    );

    // التحقق من النتيجة باستخدام `result.payload`، والذي يحتوي على الرد من Redux
    if (result.payload && result.payload.status === "success") {
      toast.success(`${element.title} تمت إضافته إلى قائمة الأمنيات!`);
      setFav(true);
    } else {
      toast.error("فشل في إضافة المنتج إلى قائمة الأمنيات. حاول مرة أخرى.");
    }
  };

  // delet
  const deleteToWishListData = async () => {
    const result = await dispatch(
      deleteProductToWishList({ productId: element._id })
    );

    // التحقق من النتيجة باستخدام `result.payload` كما هو موضح في `addToWishListData`
    if (result.payload && result.payload.status === "success") {
      toast.success(`${element.title} تمت إزالته من قائمة الأمنيات!`);
      setFav(false);
    } else {
      toast.error("فشل في إزالة المنتج من قائمة الأمنيات. حاول مرة أخرى.");
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
