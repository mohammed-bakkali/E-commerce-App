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
    dispatch(fetchAllCategories({ limit: 6 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Select categories from the Redux store
  const categories = useSelector((state) =>
    state.category.categories.map((el) => ({
      ...el,
      image: el.image ? `http://${el.image}` : "default-image-url.png", 
      id: el._id,
    }))
  );

   // Select totalPages from the Redux store
  const totalPages = useSelector((state) => state.category.totalPages);
  console.log("totalPages",totalPages)


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
