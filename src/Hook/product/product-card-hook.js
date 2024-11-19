import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  deleteProductToWishList,
} from "../../Redux/reducers/WishListSlice";
import { toast } from "react-toastify";
import favon from "../../assets/icons/fav-on.png";
import favoff from "../../assets/icons/fav-off.png";

const useProductCardHook = (element, favoriteProds) => {
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setloadingRemove] = useState(true);
  const Fav = favoriteProds.some((idProduct) => idProduct === element._id); // true
  const [favImg, setFavImg] = useState(favoff);
  const [isFav, setIsFav] = useState(Fav);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFav(favoriteProds.some((idProduct) => idProduct === element._id));
  }, [Fav]);

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

  const responseAdd = useSelector((state) => state.wishlist.addWishlistList);
  const responseRemov = useSelector(
    (state) => state.wishlist.deleteWishlistList
  );

  // Add to wishlist
  const addToWishListData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to do this.");
      return;
    }

    setIsFav(true);
    setFavImg(favon);

    setLoadingAdd(true);
    await dispatch(addProductToWishList({ productId: element._id }));
    setLoadingAdd(false);
  };

  // Remove from wishlist
  const deleteToWishListData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to do this.");
      return;
    }

    setIsFav(false);
    setFavImg(favoff);
    setloadingRemove(true);
    await dispatch(deleteProductToWishList({ productId: element._id }));
    setloadingRemove(false);
  };

  useEffect(() => {
    if (loadingAdd === false) {
      console.log("test",responseAdd)
      if (responseAdd && responseAdd.status === "success") {
        toast.success(`${element.title} has been added to the wishlist!`);
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      if (responseRemov && responseRemov.status === "success") {
        toast.warn(`${element.title} has been removed from the wishlist!`);
      }
    }
  }, [loadingRemove]);



  const imageUrl = 
  element.imageCover.startsWith("http") && !element.imageCover.includes("127.0.0.1:8000/products/")
    ? `http://127.0.0.1:8000/products/${element.imageCover.replace(/^http:\/\//, "")}`
    : !element.imageCover.startsWith("http") && element.imageCover.includes("127.0.0.1:8000")
    ? `http://${element.imageCover}`
    : element.imageCover.startsWith("http")
    ? element.imageCover
    : `http://127.0.0.1:8000/products/${element.imageCover}`;



  return {
    addToWishListData,
    deleteToWishListData,
    handelFav,
    favImg,
    imageUrl,
  };
};

export default useProductCardHook;
