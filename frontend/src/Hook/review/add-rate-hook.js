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

  const loading = useSelector((state) => state.review.loading);
  const res = useSelector((state) => state.review.createReviews);
  const error = useSelector((state) => state.review.error);
// In your component's useEffect hook
useEffect(() => {
  if (!loading) {
    if (res) {
      console.log("ss", res); // This should now log the payload
      console.log("review:", res.review);
      console.log("status:", res.status);
    } else if (error) {
      console.error("Error creating review:", error);
      // Display the error message to the user
      toast.error(error?.errors[0]?.msg || "An error occurred while creating the review.");
    }
  }
}, [loading, res, error]);


  
  

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
