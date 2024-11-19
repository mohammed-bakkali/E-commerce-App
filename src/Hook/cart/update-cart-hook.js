import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUserCartItems, updateCartItem } from "../../Redux/reducers/CartSlice";
// UpdateQuantityCart
const useUpdateCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const onchangeCount = (e) => {
    setItemCount(e.target.value);
  };

  useEffect(() => {
    if (item) {
      setItemCount(item.count);
    } else {
      setItemCount(0);
    }
  }, []);

  const response = useSelector((state) => state.cart.UpdateQuantityCart);



  const handeleUpdateCart = async () => {
  await  dispatch(
      updateCartItem({
        id: item._id,
        body: {
          count: itemCount,
        },
      })
    );
    dispatch(fetchAllUserCartItems());
  };

  

  return { itemCount, onchangeCount, handeleUpdateCart };
};

export default useUpdateCartHook;
