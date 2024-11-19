import React, { useEffect } from 'react';
import { fetchAllProductsByCategory } from '../../Redux/reducers/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const useViewProductsByCategoryHook = (categoryID) => {

  let limit = 5
  
  const dispatch = useDispatch();
  // Fetch categories on mount without limit
  useEffect(() => {
    dispatch(fetchAllProductsByCategory({  limit, categoryID }));
  }, [dispatch]);



  // Extract Product bY categories state from the Redux store
  const productsByCategory = useSelector((state) => state.product.AllproductsBycat);
  const paginationResult = useSelector((state) => state.product.paginationResult) || {};




  let items = [];
  if (productsByCategory) {
    items = productsByCategory;
  } else {
    items = [];
  }

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductsByCategory({ page,  limit,  categoryID}));
  };

  let pagination = []
  if (paginationResult) {
    pagination = paginationResult.numberOfPages
    console.log("ppp",pagination)
  } else {
    pagination = []
  }

  // const loading = useSelector((state) => state.product.loading);
  return { items, pagination, onPageChange };
}

export default useViewProductsByCategoryHook;
