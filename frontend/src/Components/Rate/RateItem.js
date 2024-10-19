import "../../styles/RateItem.css";
import rate from "../../assets/images/rate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useDeleteRateHook from "../../Hook/review/delete-rate-hook";
import useEditRateHook from "../../Hook/review/edit-rate-hook";

const RateItem = ({ review }) => {
  const { isModalOpen, isUser, openModal, closeModal, onConfirm } =
    useDeleteRateHook(review);

  const { isEditModalOpen, openEditModal, closeEditModal, onConfirmEdit } =
    useEditRateHook(review);

  if (!review || !review.user) {
    return <div>No review available</div>;
  }

  return (
    <div className="rate-item">
      <div className="rate-item-name">
        <div>{review.user.name || "Unknown User"}</div>
        <div className="rate-item-rating">
          <img src={rate} alt="Rating" height="16px" width="16px" />
          <div className="rate-value">{review.rating || "N/A"}</div>
        </div>
      </div>
      <div className="rate-description">
        {review.review || "No description available."}
      </div>
      {isUser === true ? (
        <div className="rate-actions">
          <FontAwesomeIcon
            icon={faEdit}
            className="icon edit-icon"
            onClick={openEditModal}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon delete-icon"
            onClick={openModal}
          />
        </div>
      ) : null}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p id="OnePro">Are you sure you want to delete this Rating?</p>
            <button id="confirmDelete" onClick={onConfirm}>
              Delete
            </button>
            <button id="cancelDelete" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* Edite */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>
              &times;
            </span>
            <p id="OnePro">Are you sure you want to edit this Rating?</p>
            <div className="edit-form">
              <label htmlFor="ratingInput">New Rating:</label>
              <input
                type="number"
                id="ratingInput"
                min="1"
                max="5"
                placeholder="Enter new rating"
              />
              <label htmlFor="reviewInput">New Review:</label>
              <textarea
                id="reviewInput"
                placeholder="Enter new review"

              />
            </div>
            <button id="confirmEdit" onClick={onConfirmEdit}>
              Edit
            </button>
            <button id="cancelEdit" onClick={closeEditModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateItem;
