import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoginUser, resetAuthState } from "../../Redux/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

const useLoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); //   track if user submitted

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const response = useSelector((state) => state.user.loginUser);
  const error = useSelector((state) => state.user.error);

  //   Cleanup Redux state when leaving the page
  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, []);

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
    setHasSubmitted(true); //   user clicked login
    setLoading(true);
    await dispatch(LoginUser({ email, password }));
    setLoading(false);
  };

  //   Only runs after user submits and request finishes
  useEffect(() => {
    if (!hasSubmitted || loading) return;

    if (response?.data && response?.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 1500);
    } else if (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.error(error?.message || "Incorrect password or email");
      setHasSubmitted(false); //   reset so user can try again
    }
  }, [loading, hasSubmitted]);

  return {
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    handleLogin,
  };
};

export default useLoginHook;
