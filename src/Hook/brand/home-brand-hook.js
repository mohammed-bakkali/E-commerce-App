import { useEffect } from "react";
import { fetchAllBrands } from "../../Redux/reducers/BrandSlice";
import { useSelector, useDispatch } from "react-redux";

const useHomeBrandHooks = () => {
  const dispatch = useDispatch();

  // Fetch brands on component mount
  useEffect(() => {
    dispatch(fetchAllBrands({})); // Fetch limited brands
  }, [dispatch]);

  // Extract brands and loading state from the Redux store
  const brands = useSelector((state) =>
    state.brand.brands.map((el) => ({
      name: el.name || "Unknown Name",
      image: el.image ? `http://${el.image}` : "default-image-url.png",
      id: el._id
    }))
  );

  const loading = useSelector((state) => state.brand.loading);

  return { brands, loading };
};

export default useHomeBrandHooks;
