import React, { useRef } from "react";
import "../../styles/AdminAddCoupon.css";
import useAddCouponHook from "../../Hook/coupon/add-coupon-hook";
// import AdminCoupnCard from "./AdminCoupnCard";

const AdminAddCoupon = () => {
  const dateRef = useRef();

  const {
    couponName,
    couponDate,
    discountValue,
    onChangeName,
    onChangeDiscount,
    onChangeDate,
    addCoupn,
    coupons,
  } = useAddCouponHook();

  return (
    <>
      <div className="add-coupon-container">
        <h2 className="add-coupon-title">Add New Coupon</h2>
        <form className="add-coupon-form">
          <div className="form-group">
            <input
              value={couponName}
              onChange={onChangeName}
              type="text"
              id="couponName"
              className="form-input"
              placeholder="Enter coupon name"
            />
          </div>
          <div className="form-group">
            <input
              value={discountValue}
              onChange={onChangeDiscount}
              type="number"
              id="discount"
              className="form-input"
              placeholder="Enter discount percentage"
            />
          </div>
          <div className="form-group">
            <input
              ref={dateRef}
              type="text"
              id="expiryDate"
              className="form-input"
              placeholder="Enter Expiry date"
              onFocus={() => (dateRef.current.type = "date")}
              onBlur={() => (dateRef.current.type = "text")}
              onChange={onChangeDate}
              value={couponDate}
            />
          </div>
          <button type="submit" className="btn-submit" onClick={addCoupn}>
            Save Coupon
          </button>
        </form>
      </div>
      {/* {coupons && coupons.length > 0 ? (
        coupons.map((item, index) => (
          <AdminCoupnCard key={index} coupon={item} />
        ))
      ) : (
        <p>No coupons available</p>
      )} */}
    </>
  );
};

export default AdminAddCoupon;
