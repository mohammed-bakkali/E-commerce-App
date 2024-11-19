import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories, fetchAllCategoriesPage } from '../../Redux/reducers/categorySlice';

const useViewCategorysAdminHook = () => {
  const dispatch = useDispatch();

  let limit = 5;

  
  useEffect(() => {
    dispatch(fetchAllCategories({ limit })); 
  }, [dispatch]);

  const onPageChange = (page) => {
    dispatch(fetchAllCategoriesPage({ page, limit }));
  };

  // Extract products and pagination state from the Redux store
  const AllCat = useSelector((state) => state.category.categories) || [];
  const paginationResult = useSelector((state) => state.category.paginationResult) || {};
  const results = useSelector((state) => state.category.results) || [];

    console.log("paginationResult",paginationResult)
    

  // Set items to Allproducts or an empty array if Allproducts is undefined
  const items = AllCat ? AllCat : [];

  // Set paginationInfo to paginationResult or an empty object if paginationResult is undefined
  const paginationInfo = paginationResult.numberOfPages || 0;

  return { items, paginationInfo, results, onPageChange };
}

export default useViewCategorysAdminHook;
