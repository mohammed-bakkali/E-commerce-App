import { useEffect } from "react";
import { fetchAllProductsPages, fetchAllProductsSearch } from "../../Redux/reducers/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

// Page Logic QueryString For filtring

const useViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();

  // Function to create queryString based on stored parameters
  const createQueryString = (page) => {
    const word = localStorage.getItem("searchword") || "";
    const querCat = localStorage.getItem("catChecked") || "";
    const querBrand = localStorage.getItem("brandChecked") || "";
    const sortType = localStorage.getItem("sortType") || "";
    const priceFrom = localStorage.getItem("priceFrom") || 0;  
    const priceTo = localStorage.getItem("priceTo") || 0;

    // Create price filters
    const priceFromStrong = priceFrom > 0 ? `&price[gt]=${priceFrom}` : "";
    const priceToStrong = priceTo > 0 ? `&price[lte]=${priceTo}` : "";


    const sort = getSortValue(sortType);
    return `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${querCat}&${querBrand}${priceFromStrong}${priceToStrong}`;
    
  };

  // Function to fetch products based on stored parameters
  const getProduct = async () => {
    try {
      const queryString = createQueryString();
      await dispatch(fetchAllProductsSearch({ queryString }));
    } catch (error) {
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Pagination handling
  const onPageChange = async (page) => {
    try {
      const queryString = createQueryString(page);
      await dispatch(fetchAllProductsPages({ queryString }));
    } catch (error) {
    }
  };

  // Function to determine sort type based on the stored sort type
  const getSortValue = (sortType) => {
    switch (sortType) {
      case "price_low_to_high":
        return "+price";
      case "price_high_to_low":
        return "-price";
      case "best_sellers":
        return "-sold";
      case "highest_rated":
        return "-ratingsQuantity";
      case "newest":
        return "-createdAt";
      case "oldest":
        return "+createdAt";
      case "quantity_low_to_high":
        return "+quantity";
      case "quantity_high_to_low":
        return "-quantity";
      default:
        return ""; // no_sort or default
    }
  };

  // Extract data from the Redux store
  const Allproducts = useSelector((state) => state.product.Allproducts);
  const paginationResult = useSelector((state) => state.product.paginationResult) || {};

  const items = Allproducts ? Allproducts : [];
  const paginationInfo = paginationResult.numberOfPages || 0;

  return { items, paginationInfo, onPageChange, getProduct };
};

export default useViewSearchProductsHook;
