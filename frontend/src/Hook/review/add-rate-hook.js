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
        if (res.payload.errors && res.payload.errors[0]) {

          if (res.payload.errors[0].msg === "You already added review on this product") {
            toast.error("You already added review on this product");
          } 
          else if (res.payload.errors[0].msg === "You are not allowed to perform this action") {
            toast.error("You are not allowed to perform this action!");
          }

        } else if (res.payload.message) {
          if (res.payload.message === "You are not allowed to perform this action") {
            toast.error("You are not allowed to perform this action!");
          }
        }
      }
    }
    
  };



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
