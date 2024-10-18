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
    const fetchReviews = async () => {
      setLoading(true);
      try {
        await dispatch(fetchAllProductReview({ id, page: 1, limit: 10 })).unwrap();
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchReviews();
  }, [dispatch, id]);
  

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductReview({ id, page: 1, limit: 10 }));
  };

  return { loading, allReview, onPageChange };
};

export default useViewAllReviewHook;
