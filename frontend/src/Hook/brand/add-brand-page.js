import { fetchAllBrands, fetchAllBrandsPage } from "../../Redux/reducers/BrandSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


const useAddBrandPageHook = () => {
  const dispatch = useDispatch();

 // Fetch all brands with a limit of 5 on component mount
  useEffect(() => {
    dispatch(fetchAllBrands({ limit: 5 }));
  }, [dispatch]);

  // Extract brands and totalPages from Redux store
  const { brands, totalPages, loading } = useSelector((state) => ({
    brands: state.brand.brands.map((el) => ({
      ...el,
      image: el.image ? `http://${el.image}` : "default-image-url.png", // Ensure valid image URL
    })),
    totalPages: state.brand.totalPages,
    loading: state.brand.loading,
  }));

  // Handle page changes
  const handlePageClick = (pageNumber) => {
    dispatch(fetchAllBrandsPage({ page: pageNumber }));
  };



  // Return data for component use
  return { brands, totalPages, loading, handlePageClick };
};

export default useAddBrandPageHook;
