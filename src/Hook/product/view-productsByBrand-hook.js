import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsByBrand } from '../../Redux/reducers/ProductSlice';

const useViewProductsByBrandHook = (brandID) => {
  let limit = 5
  
  const dispatch = useDispatch();
  // Fetch categories on mount without limit
  useEffect(() => {
    dispatch(fetchAllProductsByBrand({  limit, brandID }));
  }, [dispatch]);



  // Extract Product bY categories state from the Redux store
  const productsByBrand = useSelector((state) => state.product.AllproductsBybrand);
  const paginationResult = useSelector((state) => state.product.paginationResult) || {};

  console.log("productsByCategory",productsByBrand)
  console.log("pagination",paginationResult)
  console.log("Data",productsByBrand)


  let items = [];
  if (productsByBrand) {
    console.log("test300",productsByBrand)
    items = productsByBrand;
  } else {
    items = [];
  }

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductsByBrand({ page,  limit,  brandID}));
  };

  let pagination = []
  if (paginationResult) {
    pagination = paginationResult.numberOfPages
  } else {
    pagination = []
  }

  // const loading = useSelector((state) => state.product.loading);
  return { items, pagination, onPageChange };
}

export default useViewProductsByBrandHook;
