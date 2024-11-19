import { deleteCoupon, fetchAllCoupn } from "../../Redux/reducers/CouponSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

const useCardCouponHook = (coupon) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(coupon)

  const dateString = coupon.expire;
  const formaDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const dispatch = useDispatch();
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onConfirm = async () => {
    await dispatch(deleteCoupon({ id: coupon }));

    setIsModalOpen(false);
    toast.success("Coupon deleted successfully");
    dispatch(fetchAllCoupn({}));
  };
  return {
    isModalOpen,
    openModal,
    closeModal,
    onConfirm,
    formaDate,
    dateString,
  };
};

export default useCardCouponHook;
