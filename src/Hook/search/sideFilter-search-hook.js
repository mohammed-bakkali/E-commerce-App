import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../Redux/reducers/categorySlice";
import { fetchAllBrands } from "../../Redux/reducers/BrandSlice";
import useViewSearchProductsHook from "../product/view-search-products";

// Page Fetch categories and Brands and return values

const useSideFilterSearchHook = () => {
  const { getProduct } = useViewSearchProductsHook();
  const dispatch = useDispatch();

  // Fetch all categories with a limit when the component mounts
  useEffect(() => {
    const get = async () => {
      await dispatch(fetchAllCategories({}));
      await dispatch(fetchAllBrands({}));
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // get state from redux
  const categories = useSelector((state) => state.category.categories) || [];
  const brands = useSelector((state) => state.brand.brands) || [];

  var querCat = "";
  const [catChecked, setcatChecked] = useState([]);
  // user press any category
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setcatChecked([]);
    } else {
      if (e.target.checked === true) {
        setcatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = catChecked.filter((e) => e !== value);
        setcatChecked(newArry);
      }
    }
  };
  useEffect(() => {
    querCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", querCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);

  var querBrand = "";
  const [brandChecked, setBrandChecked] = useState([]);
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArry = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArry);
      }
    }
  };
  useEffect(() => {
    querBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", querBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();

  const handlePriceFromChange = (e) => {
    const value = e.target.value;
    setPriceFrom(value);
    localStorage.setItem("priceFrom", value);
  };

  const handlePriceToChange = (e) => {
    const value = e.target.value;
    setPriceTo(value);
    localStorage.setItem("priceTo", value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [priceFrom, priceTo]);

  //
  const handleClearFilter = () => {
    localStorage.clear();

    setPriceFrom(100);
    setPriceTo(500);
    setcatChecked([]);
    setBrandChecked([]);

    getProduct();
  };

  return {
    categories,
    brands,
    clickCategory,
    clickBrand,
    handlePriceFromChange,
    handlePriceToChange,
    handleClearFilter,
  };
};

export default useSideFilterSearchHook;
