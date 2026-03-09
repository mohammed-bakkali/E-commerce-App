import React from "react";
import "../../styles/CartPage.css";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import useGetAllUserCartHook from "../../Hook/cart/get-all-user-cart-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const { cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount } =
    useGetAllUserCartHook();

  return (
    <div className="container" style={{ minHeight: "670px" }}>
      {/* Header */}
      <div className="cart-page-header">
        <h2>My Shopping Cart</h2>
        {cartItems?.length > 0 && (
          <span className="cart-count-badge">{cartItems.length} items</span>
        )}
      </div>

      <div className="shopping-cart">
        {/* Items */}
        <div className="cart-Items">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <div className="cart-empty">
              <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 40, color: "#e5e7eb" }} />
              <p>Your cart is empty</p>
              <span>Add some products to get started</span>
            </div>
          )}
        </div>

        {/* Checkout */}
        <CartCheckout
          cartItems={cartItems}
          couponNameRes={couponNameRes}
          totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          totalCartPrice={totalCartPrice}
        />
      </div>
    </div>
  );
};

export default CartPage;