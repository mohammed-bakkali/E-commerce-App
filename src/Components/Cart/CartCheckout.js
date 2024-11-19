import "../../styles/CartCheckout.css";
import useDeleteCartHook from "../../Hook/cart/delete-cart-hook";
import useApplayCouponHook from "../../Hook/cart/applay-coupon-hook";
import { useEffect } from "react";



const CartCheckout = ({totalCartPrice, couponNameRes, totalCartPriceAfterDiscount, cartItems}) => {
  
  const { handleDeleteCart } = useDeleteCartHook();
  const { couponName, onChangeCoupon, handleApplyCoupon, handleCheckout } = useApplayCouponHook(cartItems);
    

  useEffect(() => {
    onChangeCoupon(couponNameRes);
  }, [couponNameRes]);





  return (
    <div className="checkout-container">
      <h2>Total:</h2>
      <h3 className="product-price">
        {totalCartPriceAfterDiscount && totalCartPriceAfterDiscount >= 1 ? (
          <>
            <span className="original-price">${totalCartPrice}</span>
            <span className="discounted-price">
              ${totalCartPriceAfterDiscount}
            </span>
          </>
        ) : (
          <span className="discounted-price">${totalCartPrice || 0}</span>
        )}
      </h3>



      <button style={{marginBottom: "20px"}} onClick={handleCheckout} className="btn-primary">Checkout</button>


      <button className="btn-primary" onClick={handleDeleteCart }>
        Clear All Carts
      </button>

      <div className="coupon-section">
        <input
          value={couponName}
          onChange={(e) => onChangeCoupon(e.target.value)}
          className="coupon-input"
          placeholder="Enter Coupon"
        />
        <button onClick={handleApplyCoupon} className="coupon-btn">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
