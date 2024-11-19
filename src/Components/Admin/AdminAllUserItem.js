import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteUserHook from "../../Hook/brand/delete-user-hook";

const AdminAllUserItem = ({ user }) => {
  const {
    loading,
    handleDeleteCart,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = useDeleteUserHook(user._id);
  const accountStatus = user.active ? "active" : "inactive"; 

  return (
    <>
      <tr className="user-item-row">
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.phone}</td>
        <td>
          <span className={`status-${accountStatus}`}>{user.active ? "Active" : "Inactive"}</span>
        </td>
        <td>
          <Link to={`/admin/user/${user._id}`} className="user-link">
            <button className="view-btn" style={{ marginRight: "6px" }}>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </Link>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon delete-icon"
            onClick={openModal}
          />
        </td>
      </tr>
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        openModal={openModal}
        message={`Are you sure you want to delete the user ${user.name}?`}
      />
    </>
  );
};

export default AdminAllUserItem;
