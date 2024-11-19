import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneOrder } from "../../Redux/reducers/OrderManagement";

const GetOrderDetailsHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrdersDetails = async () => {
      setLoading(true);
      await dispatch(fetchOneOrder({ id }));
      setLoading(false);
    };
    fetchOrdersDetails();
  }, [dispatch]);


  const responseOneOrder = useSelector((state) => state.order.fetchOneOrder);
  useEffect(() => {
    if (loading === false) {
      if (responseOneOrder && responseOneOrder.data) {
        if (responseOneOrder.data) setOrderData(responseOneOrder.data);
        if (responseOneOrder.data.cartItems) setCartItems(responseOneOrder.data.cartItems);
      }
  
    }
  }, [loading]);

  return {orderData, cartItems};
};

export default GetOrderDetailsHook;
