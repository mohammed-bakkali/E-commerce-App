import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductReview } from "../../Redux/reducers/ReviewsSlice";

const useViewAllReviewHook = (id) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const allReview = useSelector((state=>state.review.)

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllProductReview(id, 1, 10));
    setLoading(false);
  }, []);
};

export default useViewAllReviewHook;
