import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory, fetchAllCategories } from '../../Redux/reducers/categorySlice';
import { toast } from 'react-toastify';

const DeleteCategoryHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onConfirm = async () => {
    await dispatch(deleteCategory({ id: item._id }));
    toast.success("Category deleted successfully");
    dispatch(fetchAllCategories({}));
    setIsModalOpen(false);
  };
  
  return {
    loading,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  };
}

export default DeleteCategoryHook;
