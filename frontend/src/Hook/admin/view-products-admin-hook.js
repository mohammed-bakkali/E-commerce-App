import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllProductsPages } from "../../Redux/reducers/ProductSlice";

const useViewProductsAdminHook = () => {
  const dispatch = useDispatch();

  // Fetch products on mount
  useEffect(() => {
    dispatch(fetchAllProducts({ limit: 10 })); // Number of products on each page for the first time
  }, [dispatch]);

  const onPageChange = (page) => {
    dispatch(fetchAllProductsPages({ page, limit: 10 }));
  };

 // Extract products and pagination state from the Redux store
  const Allproducts = useSelector((state) => state.product.Allproducts) || [];
  const paginationResult = useSelector((state) => state.product.paginationResult) || {};

  // Set items to Allproducts or an empty array if Allproducts is undefined
  const items = Allproducts ? Allproducts : [];

  // Set paginationInfo to paginationResult or an empty object if paginationResult is undefined
  const paginationInfo = paginationResult.numberOfPages || 0;


  return { items, paginationInfo,onPageChange };
};

export default useViewProductsAdminHook;
