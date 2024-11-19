import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteUser, fetchAllUsers } from "../../Redux/reducers/UsersSlice";

const useDeleteUserHook = (userId) => {
  console.log(userId);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let limit = 5;

  const onConfirm = async () => {
    await dispatch(deleteUser({ id: userId }));
    toast.success("User deleted successfully");
    dispatch(fetchAllUsers({ limit }));
    setIsModalOpen(false);
  };

  return {
    loading,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  };
};

export default useDeleteUserHook;
