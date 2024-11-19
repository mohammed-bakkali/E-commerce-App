import React from 'react';

const ModalDelete = ({ isModalOpen, closeModal, onConfirm, message }) => {
  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p id="OnePro">{message}</p>
          <button id="confirmDelete" onClick={onConfirm}>
            Delete
          </button>
          <button id="cancelDelete" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default ModalDelete;
