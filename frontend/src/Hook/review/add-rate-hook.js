import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createReview } from "../../Redux/reducers/ReviewsSlice";

const useAddRateHook = (id) => {
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(false);
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

    const res = await dispatch(createReview(reviewData));

    if (loading === false) {
      if (res) {
        console.log("test1", res.payload.status);
        console.log("test2", res.payload);
        console.log("test3", res.payload.status);
    

        if (res.payload.message === "You already added review on this product") {
          console.log("test2", res.payload.message);
          toast.error("You already added review on this product");
    
        } else if (res.payload.message === "You are not allowed to perform this action") {
          console.log("test300");
          toast.error("You are not allowed to perform this action!");
    
        }
      }
      console.log(res);
    }
    
  };

  // const res = useSelector((state) => state.review.createReviews);

  // In your component's useEffect hook
  // useEffect(() => {
  //   if (!loading) {
  //     if (res) {
  //       console.log("ss", res); // This should now log the payload
  //       console.log("review:", res.review);
  //       console.log("status:", res.status);
  //       if (res.status === 201) {
  //         toast.success("Review added successfully!");
  //         setRateText("");
  //         setRateValue(0);
  //       }
  //       if (res.status === 403) {
  //         toast.success("You are not allowed to do this!");
  //       }
  //     } else if (error) {
  //       console.error("Error creating review:", error);
  //       // Display the error message to the user
  //       toast.error(
  //         error?.errors[0]?.msg ||
  //           "An error occurred while creating the review."
  //       );
  //     }
  //   }
  // }, [loading, res, error]);

  return {
    rateText,
    rateValue,
    HandleRateText,
    HandleRateValue,
    user,
    onSubmit,
  };
};

export default useAddRateHook;
