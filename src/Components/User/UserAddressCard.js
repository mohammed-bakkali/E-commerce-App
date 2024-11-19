import React, { useState } from "react";
import "../../styles/UserAllAddressCard.css";
import { Link } from "react-router-dom";
import ModalDelete from "../Uitilys/ModalDelete";
import useDeleteAddressHook from "../../Hook/user/delete-address-hook";


const UserAllAddressCard = ({ item }) => {
  

  const { isModalOpen, openModal, closeModal, onConfirm } = useDeleteAddressHook(item._id);


  return (
    <div className="address-card">
      <h3 className="address-title">Address Name: {item.alias}</h3>
      <p className="address-details">Details: {item.details}</p>
      <p className="address-details">City: {item.city}</p>
      <p className="address-details">Postal Code: {item.postalCode}</p>
      <p className="address-details">Phone: {item.phone}</p>
      <div className="address-actions">
        <Link to={`/user/edit-address/${item._id}`}style={{ textDecoration: "none" }}>
          <button className="btn-edit">Edit</button>
        </Link>
        <button className="btn-delete" onClick={openModal}>
          Delete
        </button>
      </div>

      
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        openModal={openModal}
        message={`Are you sure you want to delete the address "${item.alias}"?`}
      />
    </div>
  );
};

export default UserAllAddressCard;
