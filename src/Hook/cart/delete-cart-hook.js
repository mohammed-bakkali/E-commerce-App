import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllCartItem,
  fetchAllUserCartItems,
  removeItemFromCart,
} from "../../Redux/reducers/CartSlice";
import { toast } from "react-toastify";

const useDeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const response = useSelector((state) => state.cart.clearAllCart);


  const handleDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem({}));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      console.log("Response received:", response);
      if (response === "") {
        toast.success("Cart cleared successfully");
        dispatch(fetchAllUserCartItems());
      } else {
        toast.error("Failed to clear cart");
      }
    }
  }, [loading, response]);

  //  Delete item cart
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onConfirm = async () => {
    await dispatch(removeItemFromCart({ id: item._id }));
    toast.success("Item removed from cart successfully");
    dispatch(fetchAllUserCartItems());
    setIsModalOpen(false);
  };

  return {
    loading,
    handleDeleteCart,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  };
};

export default useDeleteCartHook;
