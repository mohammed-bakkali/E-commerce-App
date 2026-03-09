import React from "react";
import "../../styles/UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import useProfileHook from "../../Hook/user/profile-hook";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteUserHook from "../../Hook/user/delete-user-hook";

const UserProfile = () => {
  const {
    isEditModalOpen, name, email, phone,
    openEditModal, closeEditModal,
    onChangeName, onChangeEmail, onChangePhone,
    onConfirmEdit, onChangeOldPass, onChangeNewPass, onChangeConfirmPass,
    oldPassword, newPassword, confirmNewPassword,
    changePassword, user,
  } = useProfileHook();

  const { isModalOpen, openModal, closeModal, onConfirm } = useDeleteUserHook();

  const initial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <>
      <div className="user-profile-page">

        {/* Page header */}
        <div className="profile-page-header">
          <h2>Account Information</h2>
        </div>

        {/* Info card */}
        <div className="profile-info-card">
          {/* Top banner */}
          <div className="profile-info-top">
            <div className="profile-avatar-circle">{initial}</div>
            <div className="profile-top-text">
              <h3>{user?.name || "User"}</h3>
              <p>{user?.email || ""}</p>
            </div>
          </div>

          {/* Detail rows */}
          {user ? (
            <div className="profile-details">
              <div className="profile-detail-row">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                  <div className="detail-label">Full Name</div>
                  <div className="detail-value">{user.name}</div>
                </div>
              </div>
              <div className="profile-detail-row">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <div className="detail-label">Email</div>
                  <div className="detail-value">{user.email}</div>
                </div>
              </div>
              <div className="profile-detail-row">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">{user.phone || "—"}</div>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ padding: "20px", color: "#aaa", fontSize: 14 }}>
              No user information available.
            </p>
          )}

          {/* Actions */}
          <div className="profile-actions">
            <button onClick={openEditModal} className="btn-edit">Edit Profile</button>
            <button onClick={openModal} className="btn-delete">Delete Data</button>
          </div>
        </div>

        {/* Password card */}
        <div className="password-card">
          <h3>Change Password</h3>
          <form>
            <div className="form-group">
              <input
                value={oldPassword}
                onChange={onChangeOldPass}
                type="password"
                placeholder="Current Password"
              />
            </div>
            <div className="form-group">
              <input
                value={newPassword}
                onChange={onChangeNewPass}
                type="password"
                placeholder="New Password"
              />
            </div>
            <div className="form-group">
              <input
                value={confirmNewPassword}
                onChange={onChangeConfirmPass}
                type="password"
                placeholder="Confirm New Password"
              />
            </div>
            <button onClick={changePassword} type="submit" className="btn-save-password">
              Save Password
            </button>
          </form>
        </div>

      </div>

      {/* Edit modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <h3>Edit Profile</h3>
            <div className="edit-form">
              <input type="text"  placeholder="Full Name"    value={name}  onChange={onChangeName} />
              <input type="email" placeholder="Email"        value={email} onChange={onChangeEmail} />
              <input type="tel"   placeholder="Phone Number" value={phone} onChange={onChangePhone} />
            </div>
            <div className="modal-buttons">
              <button id="confirmEdit" onClick={onConfirmEdit}>Save</button>
              <button id="cancelEdit"  onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message="This will delete all data you've added to your account, such as favourite products and personal settings, but won't delete the account itself."
      />
    </>
  );
};

export default UserProfile;