import React, { useEffect, useState } from "react";
import { deleteUser } from "../../Redux/reducers/AuthSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const useDeleteUserHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userString = JSON.parse(localStorage.getItem("user"));
  const userId = userString ? userString._id : null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const response = useSelector((state) => state.user.deleteUser);


  const onConfirm = async () => {
    setLoading(true);
    await dispatch(deleteUser());
    localStorage.removeItem("token");
    setLoading(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!loading && response) {
      if (response.status === 204) {
        toast.success("Account data deleted successfully");
      } else {
        toast.error("Failed to delete your account data. Please try again.");
      }
    }
  }, [loading, response]);

  return {
    loading,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  };
};

export default useDeleteUserHook;
