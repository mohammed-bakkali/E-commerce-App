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
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    onConfirmEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  } = useEditRateHook(review);

  if (!review || !review.user) {
    return <div>No review available</div>;
  }

  const settings = {
    size: 20,             // Size of the stars (in pixels)
    count: 5,             // Number of stars (5 stars in this case)
    color: "#979797",     // Color of the empty stars
    activeColor: "#ffc107", // Color of the filled stars (when rated)
    value: newRateValue,  // Current rating value (updates when the user changes the rating)
    a11y: true,           // Enable accessibility
    isHalf: true,         // Allow half ratings (e.g., 4.5)
    emptyIcon: <i className="far fa-star" />,  // Icon when not rated
    halfIcon: <i className="fa fa-star-half-alt" />,  // Icon for half rating
    filledIcon: <i className="fa fa-star" />,  // Icon for a full rating
    onChange: onChangeRateValue,  // Function called when the user changes the rating
  };
  

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
            <button id="confirmDelete" onClick={onConfirmDelete}>
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
            <p id="OnePro"> Edit this Rating?</p>
            <div className="edit-form">
              <ReactStars {...settings} />
              <textarea
                onChange={onChangeRateText}
                value={newRateText}
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
