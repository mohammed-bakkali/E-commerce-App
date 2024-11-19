import React, { useState } from 'react';
import AdminAllBrandItems from './AdminAllBrandItems';
import useViewBrandsAdminHook from '../../Hook/admin/view-brands-admin-hook';
import Pagination from '../Uitilys/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';

const AdminAllBrands = () => {
  const { items, paginationInfo, results, onPageChange } = useViewBrandsAdminHook();
  const [searchTerm, setSearchTerm] = useState("");

  const mostActiveBrand = items.length > 0 ? items[0].name : "N/A";  
  const latestBrand = items.length > 0 ? items[items.length - 1].name : "N/A";

  // Filtered items based on the search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="overview-container">
        <div className="mb-20 overview-title">All Brands List</div>
        
        {/* Search Bar */}
        <div className="search-container mb-20">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Overview Section */}
        <div className="responsive-grid-250 mb-20" style={{ gap: "13px" }}>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon brand-icon" />
            <div className="overview-text">
              <span>Total Brands</span>
              <h3>{results}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faCheckCircle} className="overview-icon active-brand-icon" />
            <div className="overview-text">
              <span>Most Active Brand</span>
              <h3>{mostActiveBrand}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClock} className="overview-icon recent-brand-icon" />
            <div className="overview-text">
              <span>Latest Brand</span>
              <h3>{latestBrand}</h3>
            </div>
          </div>
          <div className="overview-card">
            <FontAwesomeIcon icon={faClipboardList} className="overview-icon featured-brand-icon" />
            <div className="overview-text">
              <span>Featured Brands</span>
              <h3>10</h3>
            </div>
          </div>
        </div>
        
        {/* Brand Table */}
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
                <AdminAllBrandItems key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Brands found</p>
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
}

export default AdminAllBrands;
