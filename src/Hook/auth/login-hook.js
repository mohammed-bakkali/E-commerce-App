import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoginUser } from "../../Redux/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

const useLoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const response = useSelector((state) => state.user.loginUser);
  const error = useSelector((state) => state.user.error); 

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    if (!password.trim() || password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await dispatch(LoginUser({ email, password }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (response?.data && response?.token) {
        //  success
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Login successful!");
        setTimeout(() => navigate("/"), 1500);
      } else if (error) {
       // Clear error from Redux
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error(error?.message || "Incorrect password or email");
      }
    }
  }, [loading, response, error]);

  return { email, password, loading, onChangeEmail, onChangePassword, handleLogin };
};

export default useLoginHook;
