import React from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteAddressHook from "../../Hook/user/delete-address-hook";

const UserAddressCard = ({ item }) => {
  const { isModalOpen, openModal, closeModal, onConfirm } = useDeleteAddressHook(item?._id);

  return (
    <>
      <tr className="address-row">
        <td>
          <span className="alias-badge">{item?.alias}</span>
        </td>
        <td>{item?.details || "—"}</td>
        <td>{item?.postalCode || "—"}</td>
        <td>{item?.phone || "—"}</td>
        <td>
          <Link to={`/user/edit-address/${item?._id}`}>
            <button className="btn-edit">Edit</button>
          </Link>
          <button className="btn-delete" onClick={openModal}>Delete</button>
        </td>
      </tr>

      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message={`Are you sure you want to delete "${item?.alias}"?`}
      />
    </>
  );
};

export default UserAddressCard;