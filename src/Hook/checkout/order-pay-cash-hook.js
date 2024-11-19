import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOneAddress } from "../../Redux/reducers/UserAddressesSlice";
import useGetAllUserCartHook from "../cart/get-all-user-cart-hook";
import { toast } from "react-toastify";
import { createOrderCash } from "../../Redux/reducers/checkoutSlice";

const useOrderPayCashHook = () => {
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);
  const [addressDetails, setAddressDetails] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cardID } = useGetAllUserCartHook();


  // change address by user
  const handleChooseAddress = (e) => {
    setAddressDetails([]);
    if (e.target.value !== 0) {
      get(e.target.value);
    }
  };

  const get = async (id) => {
    setLoading(true);
    await dispatch(fetchOneAddress({ id }));
    setLoading(false);
  };

  const singleAddress = useSelector((state) => state.address.singleAddress);

  useEffect(() => {
    if (loading === false && singleAddress?.data?.data) {
      setAddressDetails(singleAddress.data.data || "");
    } else {
      setAddressDetails([]);
    }
  }, [loading]);

  // Create Order Cash
  const handleCreateOrderCash  = async () => {
    if (!cardID || cardID === "0") {
      toast.error("Please ensure your cart is valid.");
      return;
    }

    if (!addressDetails || !addressDetails.details) {
      toast.error("Please select a valid address before confirming payment.");
      return;
    }
    setLoadingCreate(true);
    await dispatch(
      createOrderCash({
        id: cardID,
        body: {
          shippingAddress: {
            details: addressDetails.details || "default details",
            phone: addressDetails.phone || "012066283234",
            postalCode: addressDetails.postalCode || "41516",
          },
        },
      })
    );
    setLoadingCreate(false);
  };

  // Get Response for Creat Order Cash
  const createdOrderCash = useSelector((state) => state.checkout.createdOrderCash);
    
  

  useEffect(() => {
    if (loadingCreate === false) {
      if (createdOrderCash && createdOrderCash?.status === "success") {
        console.log("createdOrderCash", createdOrderCash);
        toast.success("Order created successfully!");
        setTimeout(() => {
          navigate("/user/allorders")
        }, 1500);
      } else {
        toast.error("Failed to create order. Please try again.");
      }
    }
  }, [loadingCreate]);



  return { handleChooseAddress, addressDetails, handleCreateOrderCash  };
};

export default useOrderPayCashHook;
