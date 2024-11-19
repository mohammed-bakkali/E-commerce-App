import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ModalDelete from "../Uitilys/ModalDelete";
import { Link } from "react-router-dom";
import useDeleteBrandHook from "../../Hook/brand/delete-brand-hook";
import DeleteCategoryHook from "../../Hook/category/delete-category-hook";

const AdminAllcategoryItems = ({ item, id }) => {
  console.log("itemCAT",item)
  const {
    loading,
    handleDeleteCart,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = DeleteCategoryHook(item);

  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString();
  const formattedUpdatedAt = new Date(item.updatedAt).toLocaleDateString();

  const imageUrl = item.image
    ? `http://${item.image}`
    : "default-image-url.png";

  return (
    <>
      <tr className="brand-item-row">
        <td>{item.name}</td>
        <td>
          {item.image ? (
            <img src={imageUrl} alt={item.name} width="50" />
          ) : (
            "No Image"
          )}
        </td>
        <td>{formattedCreatedAt}</td>
        <td>{formattedUpdatedAt}</td>
        <td>
          <Link to={`/products/category/${item._id}`} className="brand-link">
            <button className="view-btn" style={{ marginRight: "6px" }}>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </Link>
          <FontAwesomeIcon
            icon={faEdit}
            className="icon edit-icon"
            // onClick={openEditModal}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon delete-icon"
            onClick={openModal}
          />
        </td>
      </tr>
      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        openModal={openModal}
        message={`Are you sure you want to delete this catogory?`}
      />
    </>
  );
};

export default AdminAllcategoryItems;
