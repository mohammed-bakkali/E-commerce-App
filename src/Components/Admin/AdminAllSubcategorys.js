import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useViewSubCategoryAdminHook from '../../Hook/admin/view-sub-category-admin-hook';
import AdminAllSubcategoryItem from './AdminAllSubcategoryItem';
import {
  faClipboardList, faCheckCircle, faClock,
  faSearch, faSitemap
} from '@fortawesome/free-solid-svg-icons';
import Pagination from '../Uitilys/Pagination';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --adm-bg:      #f4f6fb;
    --adm-surface: #ffffff;
    --adm-border:  #e4e8f0;
    --adm-ink:     #1a1d2e;
    --adm-muted:   #7b8299;
    --adm-accent:  #4f6ef7;
    --adm-accent2: #7c3aed;
    --adm-green:   #10b981;
    --adm-amber:   #f59e0b;
    --adm-red:     #ef4444;
    --adm-teal:    #0ea5e9;
    --adm-ease:    cubic-bezier(.4,0,.2,1);
    --adm-radius:  10px;
    --adm-shadow:  0 1px 3px rgba(26,29,46,.06), 0 4px 16px rgba(26,29,46,.06);
  }

  .adm-sub-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--adm-bg);
    min-height: 100vh;
    padding: 32px 28px;
  }

  .adm-sub-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .adm-sub-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--adm-teal);
    margin-bottom: 4px;
  }
  .adm-sub-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  .adm-sub-search-wrap {
    position: relative;
    width: 280px;
  }
  .adm-sub-search-wrap svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--adm-muted);
    font-size: 13px;
    pointer-events: none;
  }
  .adm-sub-search-input {
    width: 100%;
    padding: 10px 14px 10px 38px;
    border: 1.5px solid var(--adm-border);
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: var(--adm-ink);
    background: var(--adm-surface);
    outline: none;
    transition: border-color .2s, box-shadow .2s;
  }
  .adm-sub-search-input:focus {
    border-color: var(--adm-teal);
    box-shadow: 0 0 0 3px rgba(14,165,233,.12);
  }
  .adm-sub-search-input::placeholder { color: var(--adm-muted); }

  /* stat cards */
  .adm-sub-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .adm-sub-stat-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    padding: 20px 20px 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: var(--adm-shadow);
    transition: transform .2s var(--adm-ease), box-shadow .2s;
  }
  .adm-sub-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,29,46,.1);
  }
  .adm-sub-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .adm-sub-stat-icon.teal   { background: rgba(14,165,233,.1);  color: var(--adm-teal);    }
  .adm-sub-stat-icon.green  { background: rgba(16,185,129,.1);  color: var(--adm-green);   }
  .adm-sub-stat-icon.amber  { background: rgba(245,158,11,.1);  color: var(--adm-amber);   }
  .adm-sub-stat-icon.purple { background: rgba(124,58,237,.1);  color: var(--adm-accent2); }
  .adm-sub-stat-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--adm-muted);
    letter-spacing: .04em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .adm-sub-stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 130px;
  }

  /* table card */
  .adm-sub-table-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    box-shadow: var(--adm-shadow);
    overflow: hidden;
  }
  .adm-sub-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-sub-table-count {
    font-size: 13px;
    color: var(--adm-muted);
  }
  .adm-sub-table-count strong { color: var(--adm-ink); font-weight: 600; }

  .adm-sub-table {
    width: 100%;
    border-collapse: collapse;
  }
  .adm-sub-table thead tr { background: #f8f9fe; }
  .adm-sub-table th {
    padding: 13px 18px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--adm-muted);
    text-align: left;
    border-bottom: 1px solid var(--adm-border);
    white-space: nowrap;
  }
  .adm-sub-table td {
    padding: 14px 18px;
    font-size: 13.5px;
    color: var(--adm-ink);
    border-bottom: 1px solid var(--adm-border);
    vertical-align: middle;
  }
  .adm-sub-table tbody tr { transition: background .15s; }
  .adm-sub-table tbody tr:hover { background: #f8f9fe; }
  .adm-sub-table tbody tr:last-child td { border-bottom: none; }

  /* name cell */
  .adm-sub-name-cell {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }
  .adm-sub-initial {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--adm-teal), var(--adm-accent2));
    color: white;
    font-size: 13px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    text-transform: uppercase;
  }

  /* date badge */
  .adm-sub-date-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--adm-muted);
    background: var(--adm-bg);
    padding: 4px 10px;
    border-radius: 50px;
    border: 1px solid var(--adm-border);
  }

  /* action buttons */
  .adm-sub-action-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-sub-btn-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    border: 1px solid var(--adm-border);
    background: var(--adm-surface);
    display: flex; align-items: center; justify-content: center;
    font-size: 13px;
    cursor: pointer;
    transition: background .2s, border-color .2s, color .2s, transform .15s;
    text-decoration: none;
    color: var(--adm-muted);
  }
  .adm-sub-btn-icon:hover { transform: scale(1.1); }
  .adm-sub-btn-icon.view:hover { background: rgba(14,165,233,.1);  border-color: var(--adm-teal);  color: var(--adm-teal);  }
  .adm-sub-btn-icon.edit:hover { background: rgba(245,158,11,.1);  border-color: var(--adm-amber); color: var(--adm-amber); }
  .adm-sub-btn-icon.del:hover  { background: rgba(239,68,68,.1);   border-color: var(--adm-red);   color: var(--adm-red);   }

  /* empty */
  .adm-sub-empty {
    padding: 60px 20px;
    text-align: center;
    color: var(--adm-muted);
  }
  .adm-sub-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: .4; }
  .adm-sub-empty-text { font-size: 14px; }

  /* responsive */
  @media (max-width: 1024px) {
    .adm-sub-stat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .adm-sub-page { padding: 20px 16px; }
    .adm-sub-stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-sub-search-wrap { width: 100%; }
    .adm-sub-header { flex-direction: column; align-items: flex-start; }
    .adm-sub-table th, .adm-sub-table td { padding: 11px 12px; }
  }
`;

const AdminAllSubcategories = () => {
  const {
    items,
    paginationInfo,
    results,
    mostActiveSubcategory,
    latestSubcategory,
    onPageChange,
  } = useViewSubCategoryAdminHook();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>{css}</style>
      <div className="adm-sub-page">

        {/* ── Header ── */}
        <div className="adm-sub-header">
          <div>
            <div className="adm-sub-eyebrow">Admin Panel</div>
            <div className="adm-sub-title">All Subcategories</div>
          </div>
          <div className="adm-sub-search-wrap">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search subcategories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="adm-sub-search-input"
            />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="adm-sub-stat-grid">
          <div className="adm-sub-stat-card">
            <div className="adm-sub-stat-icon teal">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div>
              <div className="adm-sub-stat-label">Total Subcategories</div>
              <div className="adm-sub-stat-value">{results}</div>
            </div>
          </div>
          <div className="adm-sub-stat-card">
            <div className="adm-sub-stat-icon green">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="adm-sub-stat-label">Most Active</div>
              <div className="adm-sub-stat-value" title={mostActiveSubcategory}>
                {mostActiveSubcategory}
              </div>
            </div>
          </div>
          <div className="adm-sub-stat-card">
            <div className="adm-sub-stat-icon amber">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <div className="adm-sub-stat-label">Latest Added</div>
              <div className="adm-sub-stat-value" title={latestSubcategory}>
                {latestSubcategory}
              </div>
            </div>
          </div>
          <div className="adm-sub-stat-card">
            <div className="adm-sub-stat-icon purple">
              <FontAwesomeIcon icon={faSitemap} />
            </div>
            <div>
              <div className="adm-sub-stat-label">Featured</div>
              <div className="adm-sub-stat-value">10</div>
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="adm-sub-table-card">
          <div className="adm-sub-table-toolbar">
            <span className="adm-sub-table-count">
              Showing <strong>{filteredItems.length}</strong> of <strong>{results}</strong> subcategories
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <table className="adm-sub-table">
              <thead>
                <tr>
                  <th>Subcategory Name</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <AdminAllSubcategoryItem key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="adm-sub-empty">
              <div className="adm-sub-empty-icon">🗂️</div>
              <div className="adm-sub-empty-text">
                {searchTerm
                  ? `No subcategories matching "${searchTerm}"`
                  : 'No subcategories found'}
              </div>
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {paginationInfo >= 1 && (
          <Pagination
            totalPages={paginationInfo || 0}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </>
  );
};

export default AdminAllSubcategories;