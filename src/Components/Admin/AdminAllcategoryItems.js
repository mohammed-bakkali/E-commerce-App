import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ModalDelete from "../Uitilys/ModalDelete";
import { Link } from "react-router-dom";
import DeleteCategoryHook from "../../Hook/category/delete-category-hook";

const AdminAllcategoryItems = ({ item }) => {
  const {
    loading,
    handleDeleteCart,
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = DeleteCategoryHook(item);

  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  const formattedUpdatedAt = new Date(item.updatedAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });

  // ✅ Fixed: was `http://${item.image}` which broke URLs that already had https://
  const imageUrl = item.image
    ? (item.image.startsWith('http') ? item.image : `https://${item.image}`)
    : null;

  return (
    <>
      <tr>
        {/* Name with initial avatar */}
        <td>
          <div className="adm-cat-name-cell">
            <div className="adm-cat-initial">
              {item.name?.charAt(0) || '?'}
            </div>
            {item.name}
          </div>
        </td>

        {/* Image */}
        <td>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={item.name}
              className="adm-cat-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
          ) : (
            <div className="adm-no-img">N/A</div>
          )}
        </td>

        {/* Dates */}
        <td>
          <span className="adm-date-badge">📅 {formattedCreatedAt}</span>
        </td>
        <td>
          <span className="adm-date-badge">🔄 {formattedUpdatedAt}</span>
        </td>

        {/* Actions */}
        <td>
          <div className="adm-action-group">
            <Link to={`/products/category/${item._id}`} className="adm-btn-icon view" title="View">
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <button className="adm-btn-icon edit" title="Edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="adm-btn-icon del" title="Delete" onClick={openModal}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </td>
      </tr>

      <ModalDelete
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onConfirm={onConfirm}
        openModal={openModal}
        message="Are you sure you want to delete this category?"
      />
    </>
  );
};

export default AdminAllcategoryItems;