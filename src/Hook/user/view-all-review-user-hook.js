import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductReview,
  fetchAllReviewsUser,
} from "../../Redux/reducers/ReviewsSlice";

const useViewAllReviewUserHook = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Fetch reviews and pagination from the store
  const { allReviewsUser, paginationResult } = useSelector(
    (state) => state.review
  );

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllReviewsUser({}));
    setLoading(false);
  }, [dispatch]);

  // const onPageChange = async (page) => {
  //   await dispatch(fetchAllProductReview({ id, page, limit: 1 }));
  // };

  return { loading, allReviewsUser, paginationResult };
};

export default useViewAllReviewUserHook;
