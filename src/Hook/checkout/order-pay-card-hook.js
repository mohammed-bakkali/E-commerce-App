import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllUserCartHook from "../cart/get-all-user-cart-hook";
import { toast } from "react-toastify";
import { createOrderCard } from "../../Redux/reducers/checkoutSlice";

const useOrderPayCardHook = (addressDetails) => {
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cardID } = useGetAllUserCartHook();
  console.log("cardID", cardID);

  

  // Create Order Cash
  const handleCreateOrderCard = async () => {
    if (!cardID || cardID === "0") {
      toast.error("Please ensure your cart is valid.");
      return;
    }

    if (!addressDetails) {
      toast.error("Please select a valid address before confirming payment.");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderCard({
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
    setLoading(false);
  };

  // Get Response for Creat Order Cash
  const createdOrderCard = useSelector((state) => state.checkout.createdOrderCard);
    console.log(createdOrderCard)
    
  

  useEffect(() => {
    if (loading === false) {
      if (createdOrderCard && createdOrderCard?.status === "success") {
        console.log("createdOrderCard", createdOrderCard);
        toast.success("Order created successfully!");
        setTimeout(() => {
          navigate("/user/allorders")
        }, 1500);
      } else {
        toast.error("Failed to create order. Please try again.");
      }
    }
  }, [loading]);



  return {handleCreateOrderCard };
};

export default useOrderPayCardHook;
