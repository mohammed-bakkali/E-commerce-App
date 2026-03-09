import "../../styles/CartCheckout.css";
import useDeleteCartHook from "../../Hook/cart/delete-cart-hook";
import useApplayCouponHook from "../../Hook/cart/applay-coupon-hook";
import { useEffect } from "react";

const CartCheckout = ({ totalCartPrice, couponNameRes, totalCartPriceAfterDiscount, cartItems }) => {
  const { handleDeleteCart } = useDeleteCartHook();
  const { couponName, onChangeCoupon, handleApplyCoupon, handleCheckout } =
    useApplayCouponHook(cartItems);

  useEffect(() => {
    onChangeCoupon(couponNameRes);
  }, [couponNameRes]);

  const hasDiscount = totalCartPriceAfterDiscount && totalCartPriceAfterDiscount >= 1;

  return (
    <div className="checkout-container">
      <p className="checkout-label">Order Summary</p>

      {/* Price */}
      <div className="checkout-price-row">
        <span className="checkout-final-price">
          ${hasDiscount ? totalCartPriceAfterDiscount : totalCartPrice || 0}
        </span>
        {hasDiscount && (
          <span className="checkout-original-price">${totalCartPrice}</span>
        )}
      </div>

      <hr className="checkout-divider" />

      {/* Checkout */}
      <button onClick={handleCheckout} className="btn-checkout">
        Proceed to Checkout
      </button>

      {/* Clear cart */}
      <button onClick={handleDeleteCart} className="btn-clear">
        Clear Cart
      </button>

      <hr className="checkout-divider" />

      {/* Coupon */}
      <p className="checkout-label">Coupon Code</p>
      <div className="coupon-section">
        <input
          value={couponName}
          onChange={(e) => onChangeCoupon(e.target.value)}
          className="coupon-input"
          placeholder="Enter coupon..."
        />
        <button onClick={handleApplyCoupon} className="coupon-btn">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;