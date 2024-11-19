import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUserCartItems } from "../../Redux/reducers/CartSlice";

const useGetAllUserCartHook = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponNameRes, setCouponName] = useState("");
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] = useState(0);
  const [cardID, setCardID] = useState("");


  const [loading, setLoading] = useState(true);
  const [itemsNum, setItemsNum] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await dispatch(fetchAllUserCartItems());
      setLoading(false);
    };
    fetch();
  }, []);

  const response = useSelector((state) => state.cart.fetchAllUserCart);


  useEffect(() => {
    if (loading === false) {
      if (response && response.status === 200 && response.data) {
        setItemsNum(response.data.numOfCartItems);
        setCartItems(response.data.data.products);
        setTotalCartPrice(response.data.data.totalCartPrice);
        setCardID(response.data.data._id);
        if (response.data.data.coupon) {
          console.log(response.data.data.coupon);
          setCouponName(response.data.data.coupon);
        } else {
          setCouponName("");
        }
        if (response.data.data.totalAfterDiscount) {
          setTotalCartPriceAfterDiscount(response.data.data.totalAfterDiscount);
        } else {
          setTotalCartPriceAfterDiscount("");
        }
      } else {
        setCardID(0)
        setItemsNum(0);
        setCartItems([]);
        setTotalCartPrice(0);
      }
    }
  }, [loading, response]);

  return {
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    cardID
  };
};

export default useGetAllUserCartHook;
