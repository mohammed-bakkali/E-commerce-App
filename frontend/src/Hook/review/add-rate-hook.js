import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createReview } from "../../Redux/reducers/ReviewsSlice";

const useAddRateHook = (id) => {
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const HandleRateText = (e) => {
    setRateText(e.target.value);
  };

  const HandleRateValue = (newValue) => {
    setRateValue(newValue);
  };
  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const onSubmit = async () => {
    if (rateText === "") {
      toast.error("Please add a comment!");
      return;
    }
    if (rateValue === 0) {
      toast.error("Please select a rating!");
      return;
    }

    // Review data to be sent
    const reviewData = {
      id, 
      body: {
        rating: rateValue,
        review: rateText,
      },
    };

    await dispatch(createReview(reviewData));


  };
  // Get loading state and response from Redux
  const loading = useSelector((state) => state.review.loading);
  const res = useSelector((state) => state.review.createReviews);
  useEffect(() => {
    if (!loading && res) {
      if (res.length > 0) {
        toast.success("Rating submitted successfully!");
        console.log("Review submission response:", res);
      } else {
        console.log("No reviews returned or review list is empty.");
      }
    }
  }, [loading, res]);
  

  return {
    rateText,
    rateValue,
    HandleRateText,
    HandleRateValue,
    user,
    onSubmit,
    loading,
  };
};

export default useAddRateHook;
