import React from "react";
import "../../styles/CartPage.css";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";

const CartPage = () => {
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <div className="mt-20 mb-20 fw-bold fs-20">Shopping cart</div>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div style={{ flex: "1" }}>
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
