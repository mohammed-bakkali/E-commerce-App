import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderPayment,
  changeOrderdelivery,
} from "../../Redux/reducers/OrderManagement";
import { toast } from "react-toastify";

const useChangeOrderStatusHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const dispatch = useDispatch();

  



  // Change Payment Status

  const savePaymentStatus = async () => {
    if (paymentStatus === "true") {
      console.log("paymentStatus",paymentStatus)
      setLoading(true);
      await dispatch(changeOrderPayment({ id }));
      setLoading(false);
    } else if (paymentStatus === "0") {
      toast.warning("Please select a payment status");
    }
  };

  const handlePaymentStatusChange = (e) => {
    setPaymentStatus(e.target.value);
  };

  const responseOneOrder = useSelector((state) => state.order.changePayment);

  useEffect(() => {
    if (loading === false) {
      if (responseOneOrder && responseOneOrder.status === "Success") {
        console.log("test2",responseOneOrder)
        console.log("Test3",responseOneOrder)
        toast.success("Order payment status successfully updated.");
      } else  {
        toast.error("Failed to update payment status. Please try again.")
      }
        
      
    
    }
  }, [loading]);

  // 

  const handleDeliveryStatusChange = (e) => {
    setDeliveryStatus(e.target.value);
  };

  const responseDeliverOrder = useSelector((state) => state.order.changedelivery);

  const saveDeliveryStatus = async () => {
    if (deliveryStatus === "true") {
      console.log("deliveryStatus",deliveryStatus)
      setLoadingDeliver(true);
      await dispatch(changeOrderdelivery({ id }));
      setLoadingDeliver(false);
    } else if (deliveryStatus === "0") {
      toast.warning("Please select a Delivery status");
    }
  };

  useEffect(() => {
    if (loadingDeliver === false) {
      if (responseDeliverOrder && responseDeliverOrder.status === "Success") {
        console.log("test2",responseDeliverOrder)
        console.log("Test3",responseDeliverOrder)
        toast.success("Order payment status successfully updated.");
      } else  {
        toast.error("Failed to update payment status. Please try again.")
      }
        
      
    
    }
  }, [loadingDeliver]);


  return {
    paymentStatus,
    deliveryStatus,
    handlePaymentStatusChange,
    handleDeliveryStatusChange,
    savePaymentStatus,
    saveDeliveryStatus,
  };
};

export default useChangeOrderStatusHook;
