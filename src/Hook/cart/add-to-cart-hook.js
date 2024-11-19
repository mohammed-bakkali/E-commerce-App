import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, fetchAllUserCartItems } from "../../Redux/reducers/CartSlice";
import { toast } from "react-toastify";

const useAddToCartHook = (id, item) => {
  const [indexColor, setindexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const colorClick = (index, color) => {
    setindexColor(index);
    setColorText(color);
  };

  // add product to cart
  const handleAddToCart = async () => {
    console.log(item.availableColors);
    if (item.availableColors.length >= 1) {
      if (colorText === "") {
        toast.warning("Please select a color first!");
        return;
      }
    } else {
      setColorText("");
    }
    setLoading(true);
    await dispatch(
      addItemToCart({
        body: {
          productId: id,
          color: colorText,
        },
      })
    );
    setLoading(false);
  };

  const response = useSelector((state) => state.cart.addToCart);


  useEffect(() => {
    if (loading === false) {
      if (response && response.status === 200) {
        toast.success("Product added successfully to your cart");
        dispatch(fetchAllUserCartItems());
      } else {
        toast.error(
          response.status === 401
            ? "Log in first"
            : "Failed to add product to your cart"
        );
      }
    }
  }, [loading, dispatch, response]);

  return { colorClick, indexColor, handleAddToCart };
};

export default useAddToCartHook;
