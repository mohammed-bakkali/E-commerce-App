import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSubCategory } from "../../Redux/reducers/SubCategorySlice";

const useViewSubCategoryAdminHook = () => {
  const dispatch = useDispatch();

  let limit = 5;

  useEffect(() => {
    dispatch(fetchAllSubCategory({ limit }));
  }, [dispatch]);

  const onPageChange = (page) => {
    dispatch(fetchAllSubCategory({ page, limit }));
  };

  // Extract products and pagination state from the Redux store
  const AllSubCategory =
    useSelector((state) => state.subcategory.Allsubcategories) || [];

  const paginationResult =
    useSelector((state) => state.subcategory.paginationResult) || {};
  console.log("paginationResult", paginationResult);
  const results = useSelector((state) => state.subcategory.results);

  // Set items to Allproducts or an empty array if Allproducts is undefined
  const items = AllSubCategory ? AllSubCategory : [];

  // Set paginationInfo to paginationResult or an empty object if paginationResult is undefined
  const paginationInfo = paginationResult.numberOfPages || 0;

  return { items, paginationInfo, results, onPageChange };
};

export default useViewSubCategoryAdminHook;
