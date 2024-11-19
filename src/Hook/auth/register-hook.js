import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Redux/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const validate = () => {
    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    }
    if (name.length < 3 || name.length > 30) {
      toast.error("Name must be between 3 and 30 characters.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    if (!phone.trim() || phone.length < 10) {
      toast.error("Please enter a valid phone number with at least 10 digits.");
      return false;
    }

    if (!password.trim() || password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    if (!confirmPassword.trim()) {
      toast.error("Password confirmation is required.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setLoading(true);

    const res = await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );

    if (loading === false) {
      if (res) {
        if (res.payload.token) {
          const token = res.payload.token;
          localStorage.setItem("token", token);
          toast.success("Registration successful!");
          setLoading(true);
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      }
      if (res.payload.errors && res.payload.errors.length > 0) {
        if (res.payload.errors[0].msg) {
          toast.error(res.payload.errors[0].msg);
          localStorage.removeItem("token");
          setLoading(false);
          return;
        }
      }
    }
  };

  return {
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    handleRegister,
  };
};

export default useRegisterHook;
