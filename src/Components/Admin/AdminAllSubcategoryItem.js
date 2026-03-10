import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useDeleteSubCategoryHook from '../../Hook/subcategory/delete-sub-category-hook';
import ModalDelete from '../Uitilys/ModalDelete';

const AdminAllSubcategoryItem = ({ item }) => {
  const {
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = useDeleteSubCategoryHook(item);

  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  const formattedUpdatedAt = new Date(item.updatedAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });

  return (
    <>
      <tr>
        {/* Name with teal/purple gradient initial */}
        <td>
          <div className="adm-sub-name-cell">
            <div className="adm-sub-initial">
              {item.name?.charAt(0) || '?'}
            </div>
            {item.name}
          </div>
        </td>

        {/* Dates */}
        <td>
          <span className="adm-sub-date-badge">📅 {formattedCreatedAt}</span>
        </td>
        <td>
          <span className="adm-sub-date-badge">🔄 {formattedUpdatedAt}</span>
        </td>

        {/* Actions */}
        <td>
          <div className="adm-sub-action-group">
            <Link
              to={`/products/subcategory/${item._id}`}
              className="adm-sub-btn-icon view"
              title="View products"
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <button className="adm-sub-btn-icon edit" title="Edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="adm-sub-btn-icon del"
              title="Delete"
              onClick={openModal}
            >
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
        message="Are you sure you want to delete this subcategory?"
      />
    </>
  );
};

export default AdminAllSubcategoryItem;