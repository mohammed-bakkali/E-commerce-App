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

  // التحقق من صحة البريد الإلكتروني وكلمة المرور
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

      // عرض النتائج في وحدة التحكم
      console.log("test1", res.error.payload.message);
          console.log("test1", res.error.payload.message);
      console.log("test2", res.payload);
      console.log("test3", res.payload.token);
      console.log("test4", res.payload);
      console.log("test5", res.payload.data);
  

      if (res.payload.token) {
        const token = res.payload.token;
        localStorage.setItem("token", token); // تخزين التوكن
        toast.success("Login successful!"); // عرض رسالة النجاح
        setTimeout(() => {
          navigate("/");
        }, 1500);
        // الانتقال إلى صفحة أخرى بعد تسجيل الدخول
      } else {
        localStorage.removeItem("token");
      }

      // التحقق من استجابة السيرفر
      if (res.payload && res.payload.status === "error") {
        toast.error(res.payload.message); // عرض رسالة الخطأ للمستخدم
        localStorage.removeItem("token");
        setLoading(false); // إيقاف التحميل
        return; // الخروج من الوظيفة إذا كان هناك خطأ
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
