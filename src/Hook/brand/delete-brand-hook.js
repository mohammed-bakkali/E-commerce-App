import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteBrand, fetchAllBrands } from '../../Redux/reducers/BrandSlice';

const useDeleteBrandHook = (item) => {
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
    await dispatch(deleteBrand({ id: item._id }));
    toast.success("Brand deleted successfully");
    dispatch(fetchAllBrands({}));
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

export default useDeleteBrandHook;

