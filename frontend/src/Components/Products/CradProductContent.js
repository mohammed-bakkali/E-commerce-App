import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductToWishList } from "../../Redux/reducers/WishListSlice";

const CradProductContent = ({ products }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favoriteProds, setFavoriteProds] = useState([]);

  const response = useSelector((state) => state.wishlist);
  console.log("Response from Redux:", response);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(fetchAllProductToWishList({}));
      setLoading(false);
    };
    get();
  }, [dispatch]);

  useEffect(() => {
    if (loading === false) {
      // console.log("Products 78:", response);
      console.log("Products fetched:", response.allProductWishlistList.data.map(item=> item._id));
      setFavoriteProds(response.allProductWishlistList.data.map(item=> item._id));
    }
  }, [response]);
  

  return (
    <div className="responsive-grid-280">
      {products
        ? products.map((element, index) => (
            <ProductsCard key={index} product={products} element={element} favoriteProds={favoriteProds} />
          ))
        : null}
    </div>
  );
};

export default CradProductContent;
