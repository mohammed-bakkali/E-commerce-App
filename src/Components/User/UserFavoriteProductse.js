import React, { useEffect, useState } from "react";
import ProductsCard from "../Products/ProductsCard";
import Pagination from "../Uitilys/Pagination";
import CradProductContent from "../Products/CradProductContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductToWishList } from "../../Redux/reducers/WishListSlice";

const UserFavoriteProductse = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getWishlistProducts = async () => {
      setLoading(true);
      await dispatch(fetchAllProductToWishList());
      setLoading(false);
    };
    getWishlistProducts();
  }, [dispatch]);

  const response = useSelector(
    (state) => state.wishlist.allProductWishlistList
  );

  useEffect(() => {
    if (!loading && response && response.data) {
      setItems(response.data);
      console.log("Fetched favorite products:", response.data);
    }
  }, [loading, response]);

  return (
    <div>
      <h1 className="page-title">Products Favorite</h1>
      
      <>
        <CradProductContent products={items} />
      </>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProductse;

