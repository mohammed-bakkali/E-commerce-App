import React from "react";
import "../../styles/UserAllAddressCard.css";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteAddressHook from "../../Hook/user/delete-address-hook";

const UserAddressCard = ({ item }) => {
  const { isModalOpen, openModal, closeModal, onConfirm } = useDeleteAddressHook(item?._id);

  return (
    <>
      <tr className="address-row">
        <td>{item?.alias}</td>
        <td>{item?.details}</td>
        <td>{item?.postalCode}</td>
        <td>{item?.phone}</td>
        <td>
          <Link to={`/user/edit-address/${item?._id}`} style={{ textDecoration: "none" }}>
            <button className="btn-edit">Edit</button>
          </Link>
          <button className="btn-delete" onClick={openModal} style={{ marginLeft: "10px" }}>Delete</button>
        </td>
      </tr>

      {/* Modal for confirming delete */}
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message={`Are you sure you want to delete the address "${item?.alias}"?`}
      />
    </>
  );
};

export default UserAddressCard;
