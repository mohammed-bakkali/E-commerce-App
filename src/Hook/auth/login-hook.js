import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoginUser } from "../../Redux/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

const useLoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

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

  const response = useSelector((state) => state.user.loginUser);
  if (response) {
    console.log("400", response.message);
  }


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    await dispatch(
      LoginUser({
        email,
        password,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (response) {
        // console.log("test100", response);
        // console.log("test1", response);
        // console.log("test2", response.data);
        // console.log("test3", response.token);
        if (response.data && response.token) {
          console.log(response.token);
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (
          response &&
          response.message === "Incorrect email or password"
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.error("Incorrect password or email");
        }
      }
    }
  }, [loading, response]);

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
