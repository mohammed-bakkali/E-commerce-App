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
    try {
      const res = await dispatch(
        LoginUser({
          email,
          password,
        })
      );
      // toast.success("successfully");
      if (!loading && res) {
        const userData = res.payload.data;
        const token = res.payload.token;

        console.log("User Data:", userData);
        console.log("Token:", token);
        setLoading(true);

        localStorage.setItem("token", token); // تخزين التوكن
        setLoading(true); // تحديث الحالة إذا لزم الأمر
      }
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error("Failed : " + error.response.data.message);
      } else {
        toast.error("Failed to login:  : " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

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
