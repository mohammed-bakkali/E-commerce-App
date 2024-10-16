import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddRateHook = () => {
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleRateText = (e) => {
    setRateText(e.target.rateValue);
  };

  const HandleRateValue = (newValue) => {
    setRateValue(newValue);
  };
  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const onSubmit = () => {
    if (rateText === "") {
      toast.error("Please add a comment!");
      return;
    }
  };

  return { rateText, rateValue, HandleRateText, HandleRateValue, user, onSubmit };
};

export default useAddRateHook;
