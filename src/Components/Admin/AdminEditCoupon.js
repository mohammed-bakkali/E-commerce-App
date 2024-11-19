import React, { useRef } from "react";
import "../../styles/AdminEditCoupon.css";

import useEditCoupnHook from "../../Hook/coupon/edit-coupn-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const { id } = useParams();
  const dateRef = useRef();
  const {
    couponName,
    couponDate,
    discountValue,
    onChangeName,
    onChangeDate,
    onChangeDiscount,
    handleEditCoupon,
  } = useEditCoupnHook(id);
  return (
    <div className="edit-coupon-container">
      <h2 className="edit-coupon-title">Edit Coupon</h2>
      <form className="edit-coupon-form">
        <div className="form-group">
          <input
            value={couponName}
            onChange={onChangeName}
            type="text"
            id="name"
            className="form-input"
            placeholder=" Name Coupon"
          />
        </div>
        <div className="form-group">
          <input
            value={discountValue}
            onChange={onChangeDiscount}
            type="number"
            id="discount"
            className="form-input"
            placeholder="Discount Percentage"
          />
        </div>
        <div className="form-group">
          <input
          ref={dateRef}
            onChange={onChangeDate}
            value={couponDate}
            type="text"
            id="expiryDate"
            className="form-input"
            placeholder="Enter Expiry date"
            onFocus={() => (dateRef.current.type = "date")}
            onBlur={() => (dateRef.current.type = "text")}
          />
        </div>

        <button onClick={handleEditCoupon} type="submit" className="btn-submit">
          Update Coupon
        </button>
      </form>
    </div>
  );
};

export default AdminEditCoupon;
