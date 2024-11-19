import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editCoupon, fetchOneCoupon } from "../../Redux/reducers/CouponSlice";
import { useNavigate } from "react-router-dom";

const useEditCoupnHook = (id) => {
  const [couponName, setCouponName] = useState("");
  const [couponDate, setcouponDate] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const singleCoupon = useSelector((state) => state.coupon.singleCoupon);
  const response = useSelector((state) => state.coupon.editCoupon);
  console.log("1", response);
  // console.log("2",response.status)

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(fetchOneCoupon({ id }));
      setLoadingData(false);
    };
    get();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (loadingData === false) {
      if (singleCoupon.data) {
        setCouponName(singleCoupon.data.data.name);
        setDiscountValue(singleCoupon.data.data.discount);
        setcouponDate(formatDate(singleCoupon.data.data.expire));
      }
    }
  }, [loadingData]);

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

  const handleEditCoupon = async (e) => {
    e.preventDefault();

    // Check validation before dispatching
    if (!validate()) return;

    setLoading(true);
    await dispatch(
      editCoupon({
        id,
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
      if (response && response.status === 200) {
        toast.success("Coupon updated successfully!");
        setTimeout(() => {
          navigate("/admin/coupons");
        }, 1000);
      } else if (response && response.status !== 201) {
        toast.error("Failed to edit coupon");
      }
    }
  }, [loading]);

  return {
    couponName,
    couponDate,
    discountValue,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
    handleEditCoupon,
    
  };
};

export default useEditCoupnHook;
