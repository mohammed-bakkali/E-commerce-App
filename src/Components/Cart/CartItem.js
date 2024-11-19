import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CartItem.css";
import jacket1 from "../../assets/images/products/jacket-1.jpg";
import useDeleteCartHook from "../../Hook/cart/delete-cart-hook";
import ModalDelete from "../Uitilys/ModalDelete";
import useUpdateCartHook from "../../Hook/cart/update-cart-hook";

const CartItem = ({ item }) => {
  const {
    closeModal,
    openModal,
    isModalOpen,
    onConfirm,
  } = useDeleteCartHook(item);

  const { itemCount, onchangeCount, handeleUpdateCart } = useUpdateCartHook(item);


  const imageUrl =
    item.product.imageCover.startsWith("http") &&
    !item.product.imageCover.includes("127.0.0.1:8000/products/")
      ? `http://127.0.0.1:8000/products/${item.product.imageCover.replace(
          /^http:\/\//,
          ""
        )}`
      : !item.product.imageCover.startsWith("http") &&
        item.product.imageCover.includes("127.0.0.1:8000")
      ? `http://${item.product.imageCover}`
      : item.product.imageCover.startsWith("http")
      ? item.product.imageCover
      : `http://127.0.0.1:8000/products/${item.product.imageCover}`;

  return (
    <>
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        openModal={openModal}
        message={`Are you sure you want to ditch "${item.product.title}" from your cart?`}
      />

      <div className="cart-item">
        <div className="item-details">
          <img src={imageUrl} alt="Product" className="item-image" />
          <div className="item-info">
            <h4 className="item-name">{item.product.title}</h4>
            <p className="item-brand">Brand: {item.product.brand?.name}</p>
            <p className="item-rating">{item.product.ratingsAverage || 0.0} </p>
            {item.color === "" ? null : (
              <div className="item-color">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: `${item.color}` }}
                ></span>
              </div>
            )}
            <div className="quantity-wrapper">
              <label htmlFor="quantity" className="quantity-label">
                Qty:
              </label>

              <input
                value={itemCount}
                type="number"
                placeholder="1"
                className="quantity-input"
                id="quantity"
                onChange={onchangeCount}
              />
              <button onClick={handeleUpdateCart} className="btn-update-quantity">Apply Quantity</button>
            </div>
          </div>
        </div>
        <div className="item-actions">
          <div className="item-price">{item.price}$</div>
          <button className="btn-delete" onClick={openModal}>
            <FontAwesomeIcon icon={faTrashAlt} /> Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
