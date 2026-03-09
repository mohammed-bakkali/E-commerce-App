import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/AdminAllProductsCard.css";
import "../../styles/ProductsCard.css";
import { useDispatch } from "react-redux";
import { deletProduct } from "../../Redux/reducers/ProductSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const AdminAllProductsCard = ({ element }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  if (!element) return null;

  const onConfirm = async () => {
    try {
      const res = await dispatch(deletProduct({ id: element._id }));
      if (res.type === "product/deletProduct/fulfilled") {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Failed to delete product");
      }
    } catch (error) {
      toast.error(error.message || "Failed to delete product");
    } finally {
      setIsModalOpen(false);
    }
  };

  const imageUrl = element.imageCover
    ? element.imageCover.startsWith("http")
      ? element.imageCover
      : `${process.env.REACT_APP_API_URL}${element.imageCover.replace(/^undefined\//, "")}`
    : "/default-image.png";

  const hasDiscount = element.priceAfterDiscount >= 1;
  const discountPct = hasDiscount
    ? Math.round(((element.price - element.priceAfterDiscount) / element.price) * 100)
    : 0;

  const rating  = element.ratingsAverage || 0;
  const rndRating = Math.round(rating);

  return (
    <>
      <div className="product-card">
        {/* Image */}
        <div className="product-image-container">
          <Link to={`/products/${element._id}`}>
            <img src={imageUrl} alt={element.title} className="product-image" />
          </Link>
          {hasDiscount && (
            <span className="discount-badge" style={{ position: "absolute", top: 10, left: 10 }}>
              -{discountPct}%
            </span>
          )}
        </div>

        {/* Body */}
        <div className="product-card-body">
          <p className="product-title">{element.title}</p>

          <div className="product-price-row">
            {hasDiscount ? (
              <>
                <span className="original-price">${element.price}</span>
                <span className="discounted-price">${element.priceAfterDiscount}</span>
              </>
            ) : (
              <span className="normal-price">${element.price}</span>
            )}
          </div>

          <div className="rating">
            <div className="stars">
              {[1,2,3,4,5].map((s) => (
                <FontAwesomeIcon
                  key={s}
                  icon={s <= rndRating ? faStarSolid : faStarEmpty}
                  className={`star${s <= rndRating ? "" : " empty"}`}
                />
              ))}
            </div>
            <span className="rating-count">({element.ratingsQuantity || 0})</span>
          </div>
        </div>

        {/* Admin actions */}
        <div className="admin-card-actions">
          <Link to={`/admin/editproduct/${element._id}`} className="edit-btn">
            Edit
          </Link>
          <button className="remove-btn" onClick={() => setIsModalOpen(true)}>
            Delete
          </button>
        </div>
      </div>

      {/* Delete modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <div className="modal-icon">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <h3>Delete Product</h3>
            <p>Are you sure you want to delete <strong>{element.title}</strong>? This action cannot be undone.</p>
            <div className="modal-buttons">
              <button className="modal-btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="modal-btn-delete" onClick={onConfirm}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminAllProductsCard;