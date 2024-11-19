import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForegetPassword } from "../../Redux/reducers/AuthSlice";
import { toast } from "react-toastify";

const useForgetPasswordHook = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // Access the Redux state
  const response = useSelector((state) => state.user.forgetPassword);
  console.log("forgetPassword",response)

  const OnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    await dispatch(ForegetPassword({ email }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (response && response.status === "error") {
        toast.error("There was an error sending the email. Try again later!")
      } else if (response && response.status === "fail") {
        toast.error(response.message)
      }
      console.log("teste2",response);
    }
    

  }, [loading]);

  return {
    OnchangeEmail,
    email,
    handleForgetPassword,
    loading,
  };
};

export default useForgetPasswordHook;
