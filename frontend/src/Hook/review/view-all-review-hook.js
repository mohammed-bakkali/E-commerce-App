import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useViewAllReviewHook = (id) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);


  }, []);
};

export default useViewAllReviewHook;
