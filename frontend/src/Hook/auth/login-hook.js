import { useState } from "react";
import { useDispatch } from "react-redux";
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

      if (res.payload) {
        if (res.payload.token) {
          const token = res.payload.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(res.payload.data));
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        // Check server response
        if (res.payload.status === "error") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.error("email or password is invalid");
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error("Failed : " + error.response.data.message);
      } else {
        toast.error("Failed to login: " + error.message);
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
