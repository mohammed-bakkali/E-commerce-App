import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CartItem.css";
import useDeleteCartHook from "../../Hook/cart/delete-cart-hook";
import ModalDelete from "../Uitilys/ModalDelete";
import useUpdateCartHook from "../../Hook/cart/update-cart-hook";

const CartItem = ({ item }) => {
  const { closeModal, openModal, isModalOpen, onConfirm } = useDeleteCartHook(item);
  const { itemCount, onchangeCount, handeleUpdateCart } = useUpdateCartHook(item);

  const API_URL = process.env.REACT_APP_API_URL;

  let imageUrl = "/images/default-product.png";
  
  if (item?.product?.imageCover) {
    if (item.product.imageCover.startsWith("http")) {
      imageUrl = item.product.imageCover;
    } else {
      const cleanImage = item.product.imageCover
        .replace("undefined/", "")
        .replace("products/", "");
  
      imageUrl = `${API_URL}/products/${cleanImage}`;
    }
  }

  return (
    <>
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        message={`Remove "${item.product.title}" from your cart?`}
      />

      <div className="cart-item">
        {/* Left: image + info */}
        <div className="item-details">
          <img src={imageUrl} alt={item.product.title} className="item-image" />
          <div className="item-info">
            <h4 className="item-name">{item.product.title}</h4>
            {item.product.brand?.name && (
              <p className="item-brand">{item.product.brand.name}</p>
            )}
            {item.product.ratingsAverage > 0 && (
              <p className="item-rating">★ {item.product.ratingsAverage}</p>
            )}
            {item.color && (
              <div className="item-color">
                <span className="color-swatch" style={{ backgroundColor: item.color }} />
              </div>
            )}
            <div className="quantity-wrapper">
              <label htmlFor="quantity" className="quantity-label">Qty:</label>
              <input
                value={itemCount}
                type="number"
                className="quantity-input"
                id="quantity"
                onChange={onchangeCount}
              />
              <button onClick={handeleUpdateCart} className="btn-update-quantity">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Right: price + remove */}
        <div className="item-actions">
          <div className="item-price">${item.price}</div>
          <button className="btn-remove" onClick={openModal}>
            <FontAwesomeIcon icon={faTrashAlt} /> Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;