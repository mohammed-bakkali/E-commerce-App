import { fetchAllBrands, fetchAllBrandsPage } from "../../Redux/reducers/BrandSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


const useAddBrandPageHook = () => {
  const dispatch = useDispatch();

  let limit = 5

 // Fetch all brands with a limit of 5 on component mount
  useEffect(() => {
    dispatch(fetchAllBrands({ limit }));
  }, [dispatch]);


  const brands = useSelector((state) =>
    state.brand.brands.map((el) => ({
      ...el,
      id: el._id,
      image: el.image 
        ? `${process.env.REACT_APP_API_URL}${el.image.replace(/^undefined\//, "")}` 
        : "https://via.placeholder.com/150",
    }))
  );

  const paginationResult = useSelector((state) => state.brand.paginationResult);

  const loading = useSelector((state) => state.category.loading);



  // Handle page changes
  const onPageChange = (page) => {
    dispatch(fetchAllBrandsPage({ page,  limit }));
  };

  let pagination = []
  if (paginationResult) {
    pagination = paginationResult.numberOfPages
    console.log("ppp",pagination)
  } else {
    pagination = []
  }



  // Return data for component use
  return { brands, pagination, loading, onPageChange };
};

export default useAddBrandPageHook;
