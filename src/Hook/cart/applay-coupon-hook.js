import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { applayCoupnCart, fetchAllCoupn } from "../../Redux/reducers/CouponSlice";
import { fetchAllUserCartItems } from "../../Redux/reducers/CartSlice";

const useApplyCouponHook = (cartItems) => {
  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate =  useNavigate()

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };

  const handleApplyCoupon = async () => {
    console.log(couponName)
    if (couponName === "") {
      
      toast.warn("Please enter a coupon");
      return;
    }
    setLoading(true);
    await dispatch(
      applayCoupnCart({
        body: {
          couponName: couponName,
        },
      })
    );
    setLoading(false);
  };

  const response = useSelector((state) => state.coupon.applayCoupon);
  console.log("res",response)
  useEffect(() => {
    if (!loading) {
      console.log("apply", response);
      if (response && response.status === 200) {
        toast.success("Coupon applied successfully!");
        dispatch(fetchAllUserCartItems());
      } else {
        toast.warn("This coupon is invalid or expired");
        dispatch(fetchAllUserCartItems());
      }
    }
  }, [loading, response]);

  const handleCheckout = () => {
    if (cartItems.length >= 1) {
      navigate("/order/payment-method");
    } else {
      toast.warn("Please add a product to the cart");
    }
  };
  

  return { couponName, onChangeCoupon, handleApplyCoupon, handleCheckout };
};

export default useApplyCouponHook;
