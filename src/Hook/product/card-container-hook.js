import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductToWishList } from "../../Redux/reducers/WishListSlice";

const useCardContainerHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favoriteProds, setFavoriteProds] = useState([]);

  const response = useSelector((state) => state.wishlist);


  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(fetchAllProductToWishList({}))
      setLoading(false);
    };
    get();
  }, [dispatch]);

  useEffect(() => {
    if (loading === false && response.allProductWishlistList && response.allProductWishlistList.data) {
      // console.log("Products fetched:", response.allProductWishlistList.data.map(item=> item._id));
      setFavoriteProds(response.allProductWishlistList.data.map(item=> item._id));
    }
  }, [loading, response]);

  return {favoriteProds}
};

export default useCardContainerHook;
