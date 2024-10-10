import { useEffect, useState } from "react";
import useViewSearchProductsHook from "../product/view-search-products";

const useNavbarSearchHook = () => {
  const { onPageChange, getProduct } = useViewSearchProductsHook();
  const [searchword, setSearchWord] = useState("");

  // user type search word
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchword", e.target.value);
    setSearchWord(e.target.value);

    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchword]);

  return { OnChangeSearch, searchword };
};

export default useNavbarSearchHook;
