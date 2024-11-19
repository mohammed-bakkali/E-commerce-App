/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { fetchOneProduct, fetchProductLike } from "../../Redux/reducers/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneCategory } from "../../Redux/reducers/categorySlice";
import { fetchOneBrand } from "../../Redux/reducers/BrandSlice"; 

const useViewProductsDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneProduct({ id }));
    }
  }, [dispatch, id]);

  // Extract product, category, and loading state from the Redux store
  const selectedProduct = useSelector((state) => state.product.OneProduct);
  const selectedCategory = useSelector((state) => state.category.oneCategory);
  const selectedBrand = useSelector((state) => state.brand.oneBrand); 
  const selectedProductLike = useSelector((state) => state.product.similarProducts);


  const loading = useSelector((state) => state.product.loading);



  let item = selectedProduct || [];

  // Fetch the category and brand details if the product has a category and brand
  useEffect(() => {
    if (item.category) {
      dispatch(fetchOneCategory({ id: item.category }));
      if (item.brand) {
        dispatch(fetchOneBrand({ id: item.brand }));
      }
      if (item.category) {
        dispatch(fetchProductLike({ id: item.category }));
      }
    }
  }, [dispatch, item]);


  let cat = selectedCategory || [];
  let brand = selectedBrand || []; 


  const images = item.images
    ? item.images.map((imgUrl) => ({
        original: imgUrl ? `http://${imgUrl}` : "default-image-url.png",
        thumbnail: imgUrl ? `http://${imgUrl}` : "default-image-url.png",
      }))
    : [];

  // Return product details, category, brand, loading state, and images
  return { item, selectedCategory, selectedProductLike, cat, brand, loading, images };
};

export default useViewProductsDetailsHook;
