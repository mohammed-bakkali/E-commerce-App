import React from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useCardCouponHook from "../../Hook/coupon/card-coupon-hook";

const AdminCouponCard = ({ coupon }) => {
  const { isModalOpen, openModal, closeModal, onConfirm } = useCardCouponHook(coupon?._id);

  const formattedCreatedAt = new Date(coupon?.createdAt).toLocaleDateString();
  const formattedexpiredAt = new Date(coupon?.expire).toLocaleDateString();

  return (
    <>
      <tr className="coupon-row">
      
        <td>{coupon?.name}</td>
        <td>{coupon?.discount}%</td>
        <td>{formattedCreatedAt}</td>
        <td>{formattedexpiredAt}</td>
        <td>
          <Link to={`/admin/editecoupon/${coupon?._id}`} style={{ textDecoration: "none" }}>
            <button className="btn-edit">Edit</button>
          </Link>
          <button  className="btn-delete" onClick={openModal} style={{ marginLeft: "10px" }}>
            Delete
          </button>
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
