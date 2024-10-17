import {
  fetchAllCategories,
  fetchAllCategoriesPage,
} from "../../Redux/reducers/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Custom hook for fetching and paginating categories
const useAddCategoryPageHook = () => {
  const dispatch = useDispatch();

  // Fetch all categories with a limit when the component mounts
  useEffect(() => {
    dispatch(fetchAllCategories({ limit: 3 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Select categories and totalPages from the Redux store
  const { categories, totalPages } = useSelector((state) => ({
    categories: state.category.categories.map((el) => ({
      ...el,
      image: el.image ? `http://${el.image}` : "default-image-url.png", // Ensure valid image URL
    })),
    totalPages: state.category.totalPages,
  }));

  // Handle page change events
  const handlePageClick = (pageNumber) => {
    dispatch(fetchAllCategoriesPage({ page: pageNumber }));
  };

  // Get the loading state from the Redux store
  const loading = useSelector((state) => state.category.loading);

  // Return values for use in components
  return { categories, totalPages, loading, handlePageClick };
};

export default useAddCategoryPageHook;
