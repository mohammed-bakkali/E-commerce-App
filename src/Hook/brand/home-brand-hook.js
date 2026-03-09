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
      id: el._id,
      name: el.name || "Unknown Name",
      image:
        el.image && typeof el.image === "string"
          ? el.image.startsWith("http")
            ? el.image
            : `${process.env.REACT_APP_API_URL}${el.image.replace(/^undefined\//, "")}`
          : "https://via.placeholder.com/150", // fallback image
    }))
  );

  const loading = useSelector((state) => state.brand.loading);

  return { brands, loading };
};

export default useHomeBrandHooks;
