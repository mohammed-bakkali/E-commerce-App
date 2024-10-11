import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewUser } from "../../Redux/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

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

  // تعديل useSelector للوصول إلى `user` و `error`
  const { user, error } = useSelector((state) => state.user.creatUsers);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setLoading(true);

    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (user) {
        localStorage.setItem("token", user.token); // تأكد من استخدام `user.token`
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

      if (error && error.errors && error.errors.length > 0) {
        error.errors.forEach((errorItem) => {
          if (errorItem.msg === "E-mail already in use") {
            toast.error("هذا الايميل مسجل من قبل");
          } else if (errorItem.msg === "accept only egypt phone numbers") {
            toast.error("يجب أن يكون الرقم مصري مكون من 11 رقم");
          } else if (errorItem.msg === "must be at least 6 chars") {
            toast.error("يجب أن لا تقل كلمة السر عن 6 أحرف أو أرقام");
          } else {
            toast.error("حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.");
          }
        });
      }
    }
  }, [loading, user, error, navigate]);

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
