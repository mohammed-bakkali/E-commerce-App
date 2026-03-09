import "../../styles/RateItem.css";
import rate from "../../assets/images/rate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useDeleteRateHook from "../../Hook/review/delete-rate-hook";
import useEditRateHook from "../../Hook/review/edit-rate-hook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ review }) => {
  const { isModalOpen, isUser, openModal, closeModal, onConfirmDelete } =
    useDeleteRateHook(review);

  const {
    isEditModalOpen, openEditModal, closeEditModal,
    onConfirmEdit, onChangeRateText, newRateText,
    onChangeRateValue, newRateValue,
  } = useEditRateHook(review);

  if (!review || !review.user) return <div>No review available</div>;

  const starSettings = {
    size: 18, count: 5,
    color: "#ddd", activeColor: "#ffc107",
    value: newRateValue,
    a11y: true, isHalf: true,
    emptyIcon:  <i className="far fa-star" />,
    halfIcon:   <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: onChangeRateValue,
  };

  return (
    <div className="rate-item">
      {/* Header */}
      <div className="rate-item-name">
        <span className="reviewer-name">{review.user.name || "Unknown"}</span>
        <div className="rate-item-rating">
          <img src={rate} alt="star" />
          <span className="rate-value">{review.rating || "N/A"}</span>
        </div>
      </div>

      {/* Body */}
      <p className="rate-description">{review.review || "No description available."}</p>

      {/* Actions */}
      {isUser && (
        <div className="rate-actions">
          <FontAwesomeIcon icon={faEdit}     className="icon edit-icon"   onClick={openEditModal} />
          <FontAwesomeIcon icon={faTrashAlt} className="icon delete-icon" onClick={openModal} />
        </div>
      )}

      {/* Delete Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Are you sure you want to delete this review?</p>
            <div className="modal-buttons">
              <button id="confirmDelete" onClick={onConfirmDelete}>Delete</button>
              <button id="cancelDelete"  onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <p>Edit your review</p>
            <div className="edit-form">
              <ReactStars {...starSettings} />
              <textarea
                onChange={onChangeRateText}
                value={newRateText}
                placeholder="Update your review..."
              />
            </div>
            <div className="modal-buttons">
              <button id="confirmEdit" onClick={onConfirmEdit}>Save</button>
              <button id="cancelEdit"  onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateItem;