import { useEffect } from "react";
import { fetchAllProducts } from "../../Redux/reducers/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
const useViewHomeProductsHook = () => {

  const dispatch = useDispatch();
  // Fetch categories on mount without limit
  useEffect(() => {
    dispatch(fetchAllProducts({}));
  }, [dispatch]);

  // Extract categories and loading state from the Redux store
  const Allproducts = useSelector((state) => state.product.Allproducts);



  let items = [];
  if (Allproducts) {
    items = Allproducts.slice(0,5);
  } else {
    items = [];
  }

  // const loading = useSelector((state) => state.product.loading);
  return { items };
};

export default useViewHomeProductsHook;
