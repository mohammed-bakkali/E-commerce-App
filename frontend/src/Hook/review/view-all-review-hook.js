import React, { useEffect, useState } from "react";
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
    dispatch(fetchAllProductReview(id, 1, 10));
    setLoading(false);
  }, []);

  const onPageChange = async (page) => {
    await dispatch(fetchAllProductReview(id, page, 10));
  };

  return { loading, allReview, onPageChange };
};

export default useViewAllReviewHook;
