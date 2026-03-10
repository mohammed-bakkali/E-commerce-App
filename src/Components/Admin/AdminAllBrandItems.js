import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalDelete from '../Uitilys/ModalDelete';
import useDeleteBrandHook from '../../Hook/brand/delete-brand-hook';

const AdminAllBrandItems = ({ item }) => {
  const {
    closeModal,
    openModal,
    onConfirm,
    isModalOpen,
  } = useDeleteBrandHook(item);

  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  const formattedUpdatedAt = new Date(item.updatedAt).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });

  // ✅ Fixed: was `http://${item.image}` — now handles full URLs correctly
  const imageUrl = item.image
    ? (item.image.startsWith('http') ? item.image : `https://${item.image}`)
    : null;

  return (
    <>
      <tr>
        {/* Name with rose/amber gradient initial */}
        <td>
          <div className="adm-brand-name-cell">
            <div className="adm-brand-initial">
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
              className="adm-brand-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
          ) : (
            <div className="adm-brand-no-img">N/A</div>
          )}
        </td>

        {/* Dates */}
        <td>
          <span className="adm-brand-date-badge">📅 {formattedCreatedAt}</span>
        </td>
        <td>
          <span className="adm-brand-date-badge">🔄 {formattedUpdatedAt}</span>
        </td>

        {/* Actions */}
        <td>
          <div className="adm-brand-action-group">
            <Link
              to={`/products/brand/${item._id}`}
              className="adm-brand-btn-icon view"
              title="View products"
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <button className="adm-brand-btn-icon edit" title="Edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="adm-brand-btn-icon del"
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
        message="Are you sure you want to delete this brand?"
      />
    </>
  );
};

export default AdminAllBrandItems;