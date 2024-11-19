import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchAllProductsPages,
} from "../../Redux/reducers/ProductSlice";

const useViewProductsAdminHook = () => {
  const dispatch = useDispatch();

  let limit = 10;

  const [numberOfProducts, setnumberOfProducts] = useState(0);

  // Fetch products initially on component mount
  useEffect(() => {
    dispatch(fetchAllProducts({ limit }));
  }, [dispatch]);

  // Memoize onPageChange to prevent unnecessary re-renders
  const onPageChange = useCallback(
    (page) => {
      dispatch(fetchAllProductsPages({ page, limit }));
    },
    [dispatch]
  );

  // Extract data from the Redux store
  const Allproducts = useSelector((state) => state.product.Allproducts) || [];
  const paginationResult = useSelector((state) => state.product.paginationResult) || {};
  const response = useSelector((state) => state.product.numberOfProducts) || 0;

  useEffect(() => {
    if (response) {
      setnumberOfProducts(response || 0);
    }
  }, [response]);

  console.log("Number of Products:", numberOfProducts);

  return {
    items: Allproducts,
    paginationInfo: paginationResult.numberOfPages,
    onPageChange,
    numberOfProducts,
  };
};

export default useViewProductsAdminHook;
