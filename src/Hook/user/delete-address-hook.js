import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAddress,
  fetchAllAddresses,
} from "../../Redux/reducers/UserAddressesSlice";

const useDeleteAddressHook = (id) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onConfirm = async () => {
    setLoading(true);
    await dispatch(deleteAddress({ id }));
    setLoading(false);
  };

  const response = useSelector((state) => state.address.deleteAddress);


  useEffect(() => {
    if (loading === false) {
      if (response && response.status && response.status === "success") {
        toast.success("Address deleted successfully");
        setIsModalOpen(false);
        dispatch(fetchAllAddresses());
      } else {
        toast.error("Failed to delete address. Please try again.");
      }
    }
  }, [loading]);

  return { isModalOpen, openModal, closeModal, onConfirm };
};

export default useDeleteAddressHook;
