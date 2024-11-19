import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteSubCategory, fetchAllSubCategory } from '../../Redux/reducers/SubCategorySlice';

const useDeleteSubCategoryHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  let limit = 5

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onConfirm = async () => {
    await dispatch(deleteSubCategory({ id: item._id }));
    toast.success("Category deleted successfully");
    dispatch(fetchAllSubCategory({limit}));
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

export default useDeleteSubCategoryHook;
