import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewUser } from "../../Redux/reducers/AuthSlice";

const useRegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

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

  const { response, error } = useSelector((state) => ({
    response: state.user.creatUsers,
    error: state.user.error,
  }));

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setLoading(true);
    try {
      await dispatch(
        createNewUser({
          name,
          email,
          password,
          passwordConfirm: confirmPassword,
          phone,
        })
      ).unwrap();
      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (response) {
        if (response.data?.token) {
          localStorage.setItem("token", response.data.token);
          toast.success("Registration successful!");
        }
      }

      if (error) {
        // عرض الأخطاء القادمة من الخادم
        error.forEach((errMsg) => {
          toast.error(errMsg);
        });
      }
    }
  }, [loading, response, error]);

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
