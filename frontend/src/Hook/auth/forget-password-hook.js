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
    setLoading(false);
  };
  const response = useSelector((state) => state.user.forgetPassword);
  useEffect(() => {
    if (loading === false) {
      if (response) {
        toast.error("teste");
      }
    }

    // Check server response
    if (response) {
      toast.error(response.payload.message);
      setLoading(false);
      return;
    }
  }, [loading]);

  return { OnchangeEmail, email, handleForgetPasswor, loading };
};

export default useForgetPasswordHook;
