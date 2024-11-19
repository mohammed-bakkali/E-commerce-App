import React from "react";
import "../../styles/CartPage.css";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import useGetAllUserCartHook from "../../Hook/cart/get-all-user-cart-hook";

const CartPage = () => {
  const {
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  } = useGetAllUserCartHook();

  return (
    <div className="container" style={{ minHeight: "670px", flex: "1" }}>
      <div className="mt-20 mb-20 fw-bold fs-20">My Shopping Cart</div>
      <div className="shopping-cart" style={{ gap: "30px" }}>
        <div className="cart-Items">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <>
          <CartCheckout cartItems={cartItems} couponNameRes={couponNameRes} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}  totalCartPrice={totalCartPrice} />
        </>
      </div>
    </div>
  );
};

export default CartPage;
