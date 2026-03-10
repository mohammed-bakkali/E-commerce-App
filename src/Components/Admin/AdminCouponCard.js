import React from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useCardCouponHook from "../../Hook/coupon/card-coupon-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const AdminCouponCard = ({ coupon }) => {
  const { isModalOpen, openModal, closeModal, onConfirm } =
    useCardCouponHook(coupon?._id);

  const formattedCreatedAt = new Date(coupon?.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
  const expireDate = new Date(coupon?.expire);
  const formattedExpire = expireDate.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });

  const isExpired = expireDate < new Date();

  return (
    <>
      <tr>
        {/* Coupon code chip */}
        <td>
          <span className="adm-coup-code-chip">
            <FontAwesomeIcon icon={faTicketAlt} />
            {coupon?.name}
          </span>
        </td>

        {/* Discount badge */}
        <td>
          <span className="adm-coup-discount-badge">
             {coupon?.discount}% OFF
          </span>
        </td>

        {/* Created date */}
        <td>
          <span className="adm-coup-date-badge">📅 {formattedCreatedAt}</span>
        </td>

        {/* Expiry with visual status */}
        <td>
          <span className={`adm-coup-expiry-badge ${isExpired ? "expired" : "valid"}`}>
            {isExpired ? "⛔" : "✅"} {formattedExpire}
          </span>
        </td>

        {/* Actions */}
        <td>
          <div className="adm-coup-action-group">
            <Link
              to={`/admin/editecoupon/${coupon?._id}`}
              className="adm-coup-btn edit"
            >
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Link>
            <button
              className="adm-coup-btn del"
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
          </div>
        </td>
      </tr>

      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message={`Are you sure you want to delete the coupon "${coupon?.name}"?`}
      />
    </>
  );
};

export default AdminCouponCard;