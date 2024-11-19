import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductReview } from "../../Redux/reducers/ReviewsSlice";

const useViewAllReviewHook = (id) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const allReview = useSelector((state) => state.review.allReviewsProduct);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllProductReview({ id, page: 1, limit: 5 }));
    setLoading(false);
  }, [dispatch, id]);

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductReview({ id, page, limit: 1 }));
  };

  return { loading, allReview, onPageChange };
};

export default useViewAllReviewHook;
