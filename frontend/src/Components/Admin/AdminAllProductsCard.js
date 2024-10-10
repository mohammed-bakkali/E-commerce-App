import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/AdminAllProductsCard.css";
import "../../styles/ProductsCard.css";
import { useDispatch } from 'react-redux';
import { deletProduct } from '../../Redux/reducers/ProductSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAllProductsCard = ({ element }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onConfirm = () => {
    dispatch(deletProduct({ id: element._id }))
      .then(() => {
        toast.success("Product deleted successfully");
      })
      .catch((error) => {
        toast.error("Failed to delete product");
      });
      // window.location.reload();
    setIsModalOpen(false);

  };

  const imageUrl = element.imageCover
    ? `http://${element.imageCover}`
    : "default-image-url.png";

  return (
    <>
      <div className="product-card">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Link to={`/products/${element._id}`} style={{ textDecoration: "none" }}>
          <img src={imageUrl} alt="Product" className="product-image" />
        </Link>

        <div className="between-flex">
          <h4>{element.title}</h4>
          <h4 className="price">${element.price}</h4>
        </div>

        {/* <p>Accessories</p> */}

        <div className="rating">
          <span>{element.ratingsAverage || 0}</span> ({element.ratingsQuantity || 0})
        </div>

        <div className="action-buttons">
          <Link to={`/admin/editproduct/${element._id}`} className="edit-btn">Edit</Link>
          <button className="remove-btn" onClick={openModal}>Remove</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p id="OnePro">Are you sure you want to delete this Product?</p>
            <button id="confirmDelete" onClick={onConfirm}>Delete</button>
            <button id="cancelDelete" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

    </>
  );
};

export default AdminAllProductsCard;
