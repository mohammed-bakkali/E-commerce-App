import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, fetchAllCoupn } from "../../Redux/reducers/CouponSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAddCouponHook = () => {
  const [couponName, setCouponName] = useState("");
  const [couponDate, setcouponDate] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeName = (event) => {
    event.persist();
    setCouponName(event.target.value);
  };

  const onChangeDate = (event) => {
    event.persist();
    console.log(event.target.value);
    setcouponDate(event.target.value);
  };

  const onChangeDiscount = (event) => {
    event.persist();
    setDiscountValue(event.target.value);
  };

  const response = useSelector((state) => state.coupon.createCoupon);

  // Input validation
  const validate = () => {
    if (!couponName.trim()) {
      toast.error("Coupon name is required.");
      return false;
    }
    if (!couponDate) {
      toast.error("Expiration date is required.");
      return false;
    }
    if (
      !discountValue ||
      isNaN(discountValue) ||
      discountValue <= 0 ||
      discountValue > 100
    ) {
      toast.error("Discount value must be between 1 and 100.");
      return false;
    }
    return true;
  };

  const addCoupn = async (e) => {
    e.preventDefault();

    // Check validation before dispatching
    if (!validate()) return;

    setLoading(true);
    await dispatch(
      createCoupon({
        body: {
          name: couponName,
          expire: couponDate,
          discount: discountValue,
        },
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (response && response.status === 201) {
        toast.success("Coupon created successfully!");
        setTimeout(() => {
          navigate("/admin/coupons");
        }, 1000);
        resetForm();
      } else if (response && response.status === 400) {
        toast.error("This coupon already exists");
      } else if (response && response.status === 403) {
        toast.error("You are not allowed to do this");
      }
    }
  }, [loading, response]);

  const allCoupon = useSelector((state) => state.coupon.allCoupn);


  useEffect(() => {
    const get = async () => {
      await dispatch(fetchAllCoupn({}));

    };
    get();
  }, []);

  let coupons = [];
  try {
    if (allCoupon && allCoupon.data && allCoupon.data.data && allCoupon.data.data.length >= 0) {
      coupons = allCoupon.data.data;
    } else {
      coupons = [];
    }
    
  } catch (error) {}

  const resetForm = () => {
    setCouponName("");
    setcouponDate("");
    setDiscountValue("");
  };

  return {
    couponName,
    couponDate,
    discountValue,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
    addCoupn,
    coupons,
  };
};

export default useAddCouponHook;
