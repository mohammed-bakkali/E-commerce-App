import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductReview } from "../../Redux/reducers/ReviewsSlice";

const useViewAllReviewHook = (id) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const allReview = useSelector((state) => state.review.allReviewsProduct);
  if (allReview) {
    console.log("test", allReview);
  }
  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllProductReview({ id, page: 1, limit: 10 }));
    setLoading(false);
  }, [dispatch]);

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductReview({ id, page, limit: 10 }));
  };

  return { loading, allReview, onPageChange };
};

export default useViewAllReviewHook;
