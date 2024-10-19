import { useState } from "react";
import { useDispatch } from "react-redux";
import { editeProductReview } from "../../Redux/reducers/ReviewsSlice";
import { toast } from "react-toastify";

const useEditRateHook = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newRateText, setNewRateText] = useState("");
  const [isUser, setIsUser] = useState(false);

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

  const onConfirmEdit = async () => {
    try {
      const res = await dispatch(editeProductReview({}));
      if (res.type === "review/editProductReview/fulfilled") {
        toast.success("Rating edit successfully");
        // window.location.reload();
      } else {
        toast.error("Failed to edit Rating");
      }
    } catch (error) {
      toast.error(error.message || "Failed to edit Rating");
    } finally {
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
  };
};

export default useEditRateHook;
