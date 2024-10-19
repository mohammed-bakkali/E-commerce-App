import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductReview } from "../../Redux/reducers/ReviewsSlice";
import { toast } from "react-toastify";

const useDeleteRateHook = (review) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const dispatch = useDispatch();

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (review && review.user && user && review.user._id === user._id) {
      setIsUser(true);
    }
  }, [isUser, review, user]);
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {};

  const onConfirmDelete = async () => {
    try {
      const res = await dispatch(deleteProductReview({ id: review._id }));
      if (res.type === "review/deleteProductReview/fulfilled") {
        toast.success("Rating deleted successfully");
        // window.location.reload();
      } else {
        toast.error("Failed to delete Rating");
      }
    } catch (error) {
      toast.error(error.message || "Failed to delete Rating");
    } finally {
      setIsModalOpen(false);
    }
  };

  return { isModalOpen, isUser, openModal, closeModal, onConfirmDelete, handleEdit };
};

export default useDeleteRateHook;
