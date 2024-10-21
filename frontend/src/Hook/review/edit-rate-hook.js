import { useState } from "react";
import { useDispatch } from "react-redux";
import { editeProductReview } from "../../Redux/reducers/ReviewsSlice";
import { toast } from "react-toastify";

const useEditRateHook = (review) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };

  const onChangeRateValue = (newValue) => {
    setNewRateValue(newValue);
  };

  const onConfirmEdit = async () => {
    const editreview = {
      id: review._id,
      body: {
        review: newRateText,
        rating: newRateValue,
      },
    };

    setLoading(true);

    try {
      const res = await dispatch(editeProductReview(editreview));
      if (res.type === "review/editeProductReview/fulfilled") {
        toast.success("Rating edited successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // window.location.reload();
      } else {
        toast.error("Failed to edit Rating");
      }
    } catch (error) {
      toast.error(error.message || "Failed to edit Rating");
    } finally {
      setLoading(false);
      setIsEditModalOpen(false);
    }
  };

  return {
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    onConfirmEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
    loading,
  };
};

export default useEditRateHook;
