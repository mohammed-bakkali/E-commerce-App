import { useEffect } from "react";
import { fetchAllCategories } from "../../Redux/reducers/categorySlice";
import { useSelector, useDispatch } from "react-redux";

const useHomeCategoryHooks = () => {
  const dispatch = useDispatch();

  // Fetch categories on mount without limit
  useEffect(() => {
    dispatch(fetchAllCategories({}));
  }, [dispatch]);

  // Extract categories and loading state from the Redux store
  const categories = useSelector((state) =>
  
    
    state.category.categories.map((el) => ({
      id: el._id,
      image: el.image ? `http://${el.image}` : "default-image-url.png", // Ensure valid image URL
      name: el.name,
    }))
  );

  const loading = useSelector((state) => state.category.loading);

  // Colors for categories
  const colors = [
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#B3FF66",
    "#FFB366",
    "#66FFB3",
    "#FF66B3",
    "#6666FF",
    "#FFCC00",
  ];

  return { categories, loading, colors };
};

export default useHomeCategoryHooks;
