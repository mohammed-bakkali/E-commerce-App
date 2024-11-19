import React, { useEffect, useState } from "react";
import "../../styles/UserProfile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfileData } from "../../Redux/reducers/AuthSlice";
import useProfileHook from "../../Hook/user/profile-hook";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteUserHook from "../../Hook/user/delete-user-hook";

const UserProfile = () => {
  const {
    isEditModalOpen,
    name,
    email,
    phone,
    openEditModal,
    closeEditModal,
    onChangeName,
    onChangeEmail,
    onConfirmEdit,
    onChangePhone,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
    oldPassword,
    newPassword,
    changePassword,
    confirmNewPassword,
    user,
  } = useProfileHook();

  const { isModalOpen, openModal, closeModal, onConfirm } = useDeleteUserHook();

  return (
    <>
      <div className="user-profile">
        <div className="profile-header">
          <h2 className="profile-name">Account Information :</h2>
        </div>

        <div className="profile-details">
          {user ? (
            <>
              <p>
                <strong style={{ marginRight: "20px" }}>Name:</strong>{" "}
                {user?.name}
              </p>
              <p>
                <strong style={{ marginRight: "20px" }}>Email:</strong>{" "}
                {user.email}
              </p>
              <p>
                <strong style={{ marginRight: "20px" }}>Phone:</strong>{" "}
                {user.phone}
              </p>
            </>
          ) : (
            <p>No user information available.</p>
          )}
        </div>
        <div className="address-actions">
          <button onClick={openEditModal} className="btn-edit">
            Edit
          </button>
          <button
            className="btn-delete"
            onClick={openModal}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="password-change-form">
        <h3>Change Password</h3>
        <form>
          <div className="form-group">
            <input
              value={oldPassword}
              onChange={onChangeOldPass}
              type="password"
              id="current-password"
              name="currentPassword"
              placeholder="Current Password"
            />
          </div>
          <div className="form-group">
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              type="password"
              id="new-password"
              name="newPassword"
              placeholder="New Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={onChangeConfirmPass}
            />
          </div>
          <button
            onClick={changePassword}
            type="submit"
            className="btn-save-password btn-primary"
          >
            Save Password
          </button>
        </form>
      </div>
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>
              &times;
            </span>
            <h3 className="mb-20">Edit User Information</h3>
            <div className="edit-form">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={onChangeName}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={onChangeEmail}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                value={phone}
                onChange={onChangePhone}
              />
            </div>
            <button id="confirmEdit" onClick={onConfirmEdit}>
              Save Edit
            </button>
            <button id="cancelEdit" onClick={closeEditModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message=" This will delete all the data you've added to your account, such as favorite products and personal settings, but it won't delete the account itself."
      />
    </>
  );
};

export default UserProfile;
