import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBrandsPage } from "../../Redux/reducers/BrandSlice";

const useViewBrandsAdminHook = () => {
  const dispatch = useDispatch();

  let limit = 5;

  
  useEffect(() => {
    dispatch(fetchAllBrandsPage({ limit })); 
  }, [dispatch]);

  const onPageChange = (page) => {
    dispatch(fetchAllBrandsPage({ page, limit }));
  };

  // Extract products and pagination state from the Redux store
  const Allbrands = useSelector((state) => state.brand.brands) || [];
  const paginationResult =useSelector((state) => state.brand.paginationResult) || {};
  const results =useSelector((state) => state.brand.results) || [];
    console.log("paginationResult",paginationResult)
    

  // Set items to Allproducts or an empty array if Allproducts is undefined
  const items = Allbrands ? Allbrands : [];

  // Set paginationInfo to paginationResult or an empty object if paginationResult is undefined
  const paginationInfo = paginationResult.numberOfPages || 0;

  return { items, paginationInfo, results, onPageChange };
};

export default useViewBrandsAdminHook;
