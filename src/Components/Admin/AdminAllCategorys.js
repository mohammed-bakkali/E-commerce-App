import React, { useState } from 'react';
import Pagination from '../Uitilys/Pagination';
import AdminAllcategoryItems from './AdminAllcategoryItems';
import useViewCategorysAdminHook from '../../Hook/admin/view-categorys-admin-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList, faCheckCircle, faClock,
  faSearch, faTags, faChevronDown
} from '@fortawesome/free-solid-svg-icons';

/* ─── Inline styles ─────────────────────────────────────────── */
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
    --adm-ease:    cubic-bezier(.4,0,.2,1);
    --adm-radius:  10px;
    --adm-shadow:  0 1px 3px rgba(26,29,46,.06), 0 4px 16px rgba(26,29,46,.06);
  }

  /* page wrapper */
  .adm-cat-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--adm-bg);
    min-height: 100vh;
    padding: 32px 28px;
  }

  /* ── Header row ── */
  .adm-cat-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .adm-cat-title-block {}
  .adm-cat-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--adm-accent);
    margin-bottom: 4px;
  }
  .adm-cat-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  /* ── Search ── */
  .adm-search-wrap {
    position: relative;
    width: 280px;
  }
  .adm-search-wrap svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--adm-muted);
    font-size: 13px;
    pointer-events: none;
  }
  .adm-search-input {
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
  .adm-search-input:focus {
    border-color: var(--adm-accent);
    box-shadow: 0 0 0 3px rgba(79,110,247,.12);
  }
  .adm-search-input::placeholder { color: var(--adm-muted); }

  /* ── Stat cards ── */
  .adm-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .adm-stat-card {
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
  .adm-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,29,46,.1);
  }
  .adm-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .adm-stat-icon.blue   { background: rgba(79,110,247,.1);  color: var(--adm-accent);  }
  .adm-stat-icon.green  { background: rgba(16,185,129,.1);  color: var(--adm-green);   }
  .adm-stat-icon.amber  { background: rgba(245,158,11,.1);  color: var(--adm-amber);   }
  .adm-stat-icon.purple { background: rgba(124,58,237,.1);  color: var(--adm-accent2); }
  .adm-stat-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--adm-muted);
    letter-spacing: .04em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .adm-stat-value {
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

  /* ── Table card ── */
  .adm-table-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    box-shadow: var(--adm-shadow);
    overflow: hidden;
  }
  .adm-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-table-count {
    font-size: 13px;
    color: var(--adm-muted);
  }
  .adm-table-count strong { color: var(--adm-ink); font-weight: 600; }

  .adm-table {
    width: 100%;
    border-collapse: collapse;
  }
  .adm-table thead tr {
    background: #f8f9fe;
  }
  .adm-table th {
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
  .adm-table td {
    padding: 14px 18px;
    font-size: 13.5px;
    color: var(--adm-ink);
    border-bottom: 1px solid var(--adm-border);
    vertical-align: middle;
  }
  .adm-table tbody tr {
    transition: background .15s;
  }
  .adm-table tbody tr:hover { background: #f8f9fe; }
  .adm-table tbody tr:last-child td { border-bottom: none; }

  /* category name cell */
  .adm-cat-name-cell {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }
  .adm-cat-initial {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--adm-accent), var(--adm-accent2));
    color: white;
    font-size: 13px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    text-transform: uppercase;
  }

  /* image cell */
  .adm-cat-img {
    width: 42px; height: 42px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--adm-border);
  }
  .adm-no-img {
    width: 42px; height: 42px;
    border-radius: 8px;
    background: var(--adm-bg);
    border: 1px dashed var(--adm-border);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
    color: var(--adm-muted);
  }

  /* date badge */
  .adm-date-badge {
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
  .adm-action-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-btn-icon {
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
  .adm-btn-icon:hover { transform: scale(1.1); }
  .adm-btn-icon.view:hover  { background: rgba(79,110,247,.1);  border-color: var(--adm-accent);  color: var(--adm-accent);  }
  .adm-btn-icon.edit:hover  { background: rgba(245,158,11,.1);  border-color: var(--adm-amber);   color: var(--adm-amber);   }
  .adm-btn-icon.del:hover   { background: rgba(239,68,68,.1);   border-color: var(--adm-red);     color: var(--adm-red);     }

  /* empty state */
  .adm-empty {
    padding: 60px 20px;
    text-align: center;
    color: var(--adm-muted);
  }
  .adm-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: .4; }
  .adm-empty-text { font-size: 14px; }

  /* responsive */
  @media (max-width: 1024px) {
    .adm-stat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .adm-cat-page { padding: 20px 16px; }
    .adm-stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-search-wrap { width: 100%; }
    .adm-cat-header { flex-direction: column; align-items: flex-start; }
    .adm-table th, .adm-table td { padding: 11px 12px; }
  }
`;

const AdminAllCategorys = () => {
  const { items, paginationInfo, results, onPageChange } = useViewCategorysAdminHook();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mostActiveCategory = items.length > 0 ? items[0].name : 'N/A';
  const latestCategory = items.length > 0 ? items[items.length - 1].name : 'N/A';

  return (
    <>
      <style>{css}</style>
      <div className="adm-cat-page">

        {/* ── Header ── */}
        <div className="adm-cat-header">
          <div className="adm-cat-title-block">
            <div className="adm-cat-eyebrow">Admin Panel</div>
            <div className="adm-cat-title">All Categories</div>
          </div>
          <div className="adm-search-wrap">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="adm-search-input"
            />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="adm-stat-grid">
          <div className="adm-stat-card">
            <div className="adm-stat-icon blue">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div>
              <div className="adm-stat-label">Total Categories</div>
              <div className="adm-stat-value">{results}</div>
            </div>
          </div>
          <div className="adm-stat-card">
            <div className="adm-stat-icon green">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="adm-stat-label">Most Active</div>
              <div className="adm-stat-value" title={mostActiveCategory}>
                {mostActiveCategory}
              </div>
            </div>
          </div>
          <div className="adm-stat-card">
            <div className="adm-stat-icon amber">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <div className="adm-stat-label">Latest Added</div>
              <div className="adm-stat-value" title={latestCategory}>
                {latestCategory}
              </div>
            </div>
          </div>
          <div className="adm-stat-card">
            <div className="adm-stat-icon purple">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <div>
              <div className="adm-stat-label">Featured</div>
              <div className="adm-stat-value">10</div>
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="adm-table-card">
          <div className="adm-table-toolbar">
            <span className="adm-table-count">
              Showing <strong>{filteredItems.length}</strong> of <strong>{results}</strong> categories
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Image</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <AdminAllcategoryItems key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="adm-empty">
              <div className="adm-empty-icon">🗂️</div>
              <div className="adm-empty-text">
                {searchTerm ? `No categories matching "${searchTerm}"` : 'No categories found'}
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

export default AdminAllCategorys;