import { useEffect } from "react";
import { fetchAllBrands } from "../../Redux/reducers/BrandSlice";
import { useSelector, useDispatch } from "react-redux";

const useHomeBrandHooks = () => {
  const dispatch = useDispatch();

  // Fetch brands on component mount
  useEffect(() => {
    dispatch(fetchAllBrands(3)); // Fetch limited brands (3 in this case)
  }, [dispatch]);

  // Extract brands and loading state from the Redux store
  const brands = useSelector((state) =>
    state.brand.brands.map((el) => ({
      name: el.name || "Unknown Name", // Fallback to avoid undefined names
      image: el.image ? `http://${el.image}` : "default-image-url.png", // Ensure valid image URL
    }))
  );

  const loading = useSelector((state) => state.brand.loading);

  return { brands, loading };
};

export default useHomeBrandHooks;
