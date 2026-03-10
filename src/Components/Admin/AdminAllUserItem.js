import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteUserHook from "../../Hook/brand/delete-user-hook";

const AdminAllUserItem = ({ user }) => {
  const {
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = useDeleteUserHook(user._id);

  const isActive = user.active;
  const role = user.role || "user";

  return (
    <>
      <tr>
        {/* Name + avatar initial */}
        <td>
          <div className="adm-user-name-cell">
            <div className="adm-user-avatar">
              {user.name?.charAt(0)?.toUpperCase() || "?"}
            </div>
            <div>
              <div className="adm-user-name">{user.name}</div>
            </div>
          </div>
        </td>

        {/* Email */}
        <td style={{ color: "var(--adm-muted)", fontSize: "13px" }}>
          {user.email}
        </td>

        {/* Role badge */}
        <td>
          <span className={`adm-user-role-badge ${role === "admin" ? "admin" : "user"}`}>
            {role}
          </span>
        </td>

        {/* Phone */}
        <td style={{ color: "var(--adm-muted)", fontSize: "13px" }}>
          {user.phone || "—"}
        </td>

        {/* Status badge */}
        <td>
          <span className={`adm-user-status-badge ${isActive ? "active" : "inactive"}`}>
            {isActive ? "Active" : "Inactive"}
          </span>
        </td>

        {/* Actions */}
        <td>
          <div className="adm-user-action-group">
            <Link
              to={`/admin/user/${user._id}`}
              className="adm-user-btn-icon view"
              title="View user"
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <button
              className="adm-user-btn-icon del"
              title="Delete user"
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
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