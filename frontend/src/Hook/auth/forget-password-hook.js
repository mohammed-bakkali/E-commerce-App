import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ForegetPassword } from "../../Redux/reducers/AuthSlice";
import { toast } from "react-toastify";

const useForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForgetPasswor = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      ForegetPassword({
        email: email,
      })
    );
    setLoading(false)
  };
  const response = useSelector((state) => state.user.forgetPassword);
  console.log("test10", response);
  useEffect(() => {
    console.log("test1", response);
    // console.log("test2", response.payload);
    console.log("test3", response.data);

    if (loading === false) {
      if (response) {
        console.log("test4",response)
        toast.error("teste");
        // console.log("test", response.payload);
      }
    }

    // Check server response
    if (response) {
      console.log(response);
      // toast.error(response.payload.message);
      setLoading(false);
      return;
    }
  }, [loading]);

  return { OnchangeEmail, email, handleForgetPasswor, loading };
};

export default useForgetPasswordHook;
