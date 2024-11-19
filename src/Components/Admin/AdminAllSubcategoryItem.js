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

  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString();
  const formattedUpdatedAt = new Date(item.updatedAt).toLocaleDateString();



  return (
    <>
      <tr className="subcategory-item-row">
        <td>{item.name}</td>
        <td>{formattedCreatedAt}</td>
        <td>{formattedUpdatedAt}</td>
        <td>
          <Link to={`/products/subcategory/${item._id}`} className="subcategory-link">
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
        message={`Are you sure you want to delete this subcategory?`}
      />
    </>
  );
};

export default AdminAllSubcategoryItem;
