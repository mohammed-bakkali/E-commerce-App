import React, { useState } from 'react';
import Pagination from '../Uitilys/Pagination';
import AdminAllcategoryItems from './AdminAllcategoryItems';
import useViewCategorysAdminHook from '../../Hook/admin/view-categorys-admin-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckCircle, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';

const AdminAllCategorys = () => {
  const { items, paginationInfo, results, onPageChange } = useViewCategorysAdminHook();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter categories based on the search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mostActiveCategory = items.length > 0 ? items[0].name : "N/A";
  const latestCategory = items.length > 0 ? items[items.length - 1].name : "N/A";

  return (
    <>
      <div className="overview-container">
        <div className="mb-20 overview-title">All Categories List</div>

        {/* Search Bar */}
        <div className="search-container mb-20">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="responsive-grid-250 mb-20" style={{ gap: "13px" }}>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon category-icon" />
            <div className="overview-text">
              <span>Total Categories</span>
              <h3>{results}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faCheckCircle} className="overview-icon active-category-icon" />
            <div className="overview-text">
              <span>Most Active Category</span>
              <h3>{mostActiveCategory}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClock} className="overview-icon recent-category-icon" />
            <div className="overview-text">
              <span>Latest Category</span>
              <h3>{latestCategory}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon featured-category-icon" />
            <div className="overview-text">
              <span>Featured Categories</span>
              <h3>10</h3>
            </div>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <table className="overview-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <AdminAllcategoryItems key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Categories found</p>
        )}
      </div>

      {paginationInfo >= 1 ? (
        <Pagination
          totalPages={paginationInfo ? paginationInfo : 0}
          onPageChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default AdminAllCategorys;
