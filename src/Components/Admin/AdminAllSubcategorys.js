import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useViewSubCategoryAdminHook from '../../Hook/admin/view-sub-category-admin-hook';
import AdminAllSubcategoryItem from './AdminAllSubcategoryItem';
import { faClipboardList, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../Uitilys/Pagination';

const AdminAllSubcategories = () => {
  const {
    items,
    paginationInfo,
    results,
    mostActiveSubcategory,
    latestSubcategory,
    onPageChange,
  } = useViewSubCategoryAdminHook();

  const [searchTerm, setSearchTerm] = useState("");

  // Filter subcategories based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="overview-container">
        <div className="mb-20 overview-title">All Subcategories List</div>

        {/* Search Bar */}
        <div className="search-container mb-20">
          <input
            type="text"
            placeholder="Search subcategories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Overview Section */}
        <div className="responsive-grid-250 mb-20" style={{ gap: "13px" }}>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon subcategory-icon" />
            <div className="overview-text">
              <span>Total Subcategories</span>
              <h3>{results}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faCheckCircle} className="overview-icon active-subcategory-icon" />
            <div className="overview-text">
              <span>Most Active Subcategory</span>
              <h3>{mostActiveSubcategory}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClock} className="overview-icon recent-subcategory-icon" />
            <div className="overview-text">
              <span>Latest Subcategory</span>
              <h3>{latestSubcategory}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon featured-subcategory-icon" />
            <div className="overview-text">
              <span>Featured Subcategories</span>
              <h3>10</h3> {/* Adjust the number if dynamic data is available */}
            </div>
          </div>
        </div>

        {/* Subcategory Table */}
        {filteredItems.length > 0 ? (
          <table className="overview-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <AdminAllSubcategoryItem key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Subcategories found</p>
        )}
      </div>

      {/* Pagination */}
      {paginationInfo >= 1 ? (
        <Pagination
          totalPages={paginationInfo ? paginationInfo : 0}
          onPageChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default AdminAllSubcategories;
