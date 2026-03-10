import React, { useState } from 'react';
import AdminAllBrandItems from './AdminAllBrandItems';
import useViewBrandsAdminHook from '../../Hook/admin/view-brands-admin-hook';
import Pagination from '../Uitilys/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList, faClock, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

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
    --adm-rose:    #f43f5e;
    --adm-ease:    cubic-bezier(.4,0,.2,1);
    --adm-radius:  10px;
    --adm-shadow:  0 1px 3px rgba(26,29,46,.06), 0 4px 16px rgba(26,29,46,.06);
  }

  .adm-brand-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--adm-bg);
    min-height: 100vh;
    padding: 32px 28px;
  }

  /* header */
  .adm-brand-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .adm-brand-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--adm-rose);
    margin-bottom: 4px;
  }
  .adm-brand-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  /* search */
  .adm-brand-search-wrap {
    position: relative;
    width: 280px;
  }
  .adm-brand-search-wrap svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--adm-muted);
    font-size: 13px;
    pointer-events: none;
  }
  .adm-brand-search-input {
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
  .adm-brand-search-input:focus {
    border-color: var(--adm-rose);
    box-shadow: 0 0 0 3px rgba(244,63,94,.12);
  }
  .adm-brand-search-input::placeholder { color: var(--adm-muted); }

  /* stat cards */
  .adm-brand-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .adm-brand-stat-card {
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
  .adm-brand-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,29,46,.1);
  }
  .adm-brand-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .adm-brand-stat-icon.rose   { background: rgba(244,63,94,.1);   color: var(--adm-rose);    }
  .adm-brand-stat-icon.green  { background: rgba(16,185,129,.1);  color: var(--adm-green);   }
  .adm-brand-stat-icon.amber  { background: rgba(245,158,11,.1);  color: var(--adm-amber);   }
  .adm-brand-stat-icon.purple { background: rgba(124,58,237,.1);  color: var(--adm-accent2); }
  .adm-brand-stat-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--adm-muted);
    letter-spacing: .04em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .adm-brand-stat-value {
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
  .adm-brand-table-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    box-shadow: var(--adm-shadow);
    overflow: hidden;
  }
  .adm-brand-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-brand-table-count {
    font-size: 13px;
    color: var(--adm-muted);
  }
  .adm-brand-table-count strong { color: var(--adm-ink); font-weight: 600; }

  .adm-brand-table {
    width: 100%;
    border-collapse: collapse;
  }
  .adm-brand-table thead tr { background: #f8f9fe; }
  .adm-brand-table th {
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
  .adm-brand-table td {
    padding: 14px 18px;
    font-size: 13.5px;
    color: var(--adm-ink);
    border-bottom: 1px solid var(--adm-border);
    vertical-align: middle;
  }
  .adm-brand-table tbody tr { transition: background .15s; }
  .adm-brand-table tbody tr:hover { background: #f8f9fe; }
  .adm-brand-table tbody tr:last-child td { border-bottom: none; }

  /* name cell */
  .adm-brand-name-cell {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }
  .adm-brand-initial {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--adm-rose), var(--adm-amber));
    color: white;
    font-size: 13px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    text-transform: uppercase;
  }

  /* image */
  .adm-brand-img {
    width: 42px; height: 42px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--adm-border);
  }
  .adm-brand-no-img {
    width: 42px; height: 42px;
    border-radius: 8px;
    background: var(--adm-bg);
    border: 1px dashed var(--adm-border);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
    color: var(--adm-muted);
  }

  /* date badge */
  .adm-brand-date-badge {
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
  .adm-brand-action-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-brand-btn-icon {
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
  .adm-brand-btn-icon:hover { transform: scale(1.1); }
  .adm-brand-btn-icon.view:hover { background: rgba(244,63,94,.1);  border-color: var(--adm-rose);  color: var(--adm-rose);  }
  .adm-brand-btn-icon.edit:hover { background: rgba(245,158,11,.1); border-color: var(--adm-amber); color: var(--adm-amber); }
  .adm-brand-btn-icon.del:hover  { background: rgba(239,68,68,.1);  border-color: var(--adm-red);   color: var(--adm-red);   }

  /* empty */
  .adm-brand-empty {
    padding: 60px 20px;
    text-align: center;
    color: var(--adm-muted);
  }
  .adm-brand-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: .4; }
  .adm-brand-empty-text { font-size: 14px; }

  /* responsive */
  @media (max-width: 1024px) {
    .adm-brand-stat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .adm-brand-page { padding: 20px 16px; }
    .adm-brand-stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-brand-search-wrap { width: 100%; }
    .adm-brand-header { flex-direction: column; align-items: flex-start; }
    .adm-brand-table th, .adm-brand-table td { padding: 11px 12px; }
  }
`;

const AdminAllBrands = () => {
  const { items, paginationInfo, results, onPageChange } = useViewBrandsAdminHook();
  const [searchTerm, setSearchTerm] = useState('');

  const mostActiveBrand = items.length > 0 ? items[0].name : 'N/A';
  const latestBrand = items.length > 0 ? items[items.length - 1].name : 'N/A';

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>{css}</style>
      <div className="adm-brand-page">

        {/* ── Header ── */}
        <div className="adm-brand-header">
          <div>
            <div className="adm-brand-eyebrow">Admin Panel</div>
            <div className="adm-brand-title">All Brands</div>
          </div>
          <div className="adm-brand-search-wrap">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search brands..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="adm-brand-search-input"
            />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="adm-brand-stat-grid">
          <div className="adm-brand-stat-card">
            <div className="adm-brand-stat-icon rose">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div>
              <div className="adm-brand-stat-label">Total Brands</div>
              <div className="adm-brand-stat-value">{results}</div>
            </div>
          </div>
          <div className="adm-brand-stat-card">
            <div className="adm-brand-stat-icon green">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="adm-brand-stat-label">Most Active</div>
              <div className="adm-brand-stat-value" title={mostActiveBrand}>
                {mostActiveBrand}
              </div>
            </div>
          </div>
          <div className="adm-brand-stat-card">
            <div className="adm-brand-stat-icon amber">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <div className="adm-brand-stat-label">Latest Added</div>
              <div className="adm-brand-stat-value" title={latestBrand}>
                {latestBrand}
              </div>
            </div>
          </div>
          <div className="adm-brand-stat-card">
            <div className="adm-brand-stat-icon purple">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <div className="adm-brand-stat-label">Featured</div>
              <div className="adm-brand-stat-value">10</div>
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="adm-brand-table-card">
          <div className="adm-brand-table-toolbar">
            <span className="adm-brand-table-count">
              Showing <strong>{filteredItems.length}</strong> of <strong>{results}</strong> brands
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <table className="adm-brand-table">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Image</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <AdminAllBrandItems key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="adm-brand-empty">
              <div className="adm-brand-empty-icon">🏷️</div>
              <div className="adm-brand-empty-text">
                {searchTerm ? `No brands matching "${searchTerm}"` : 'No brands found'}
              </div>
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {paginationInfo >= 1 && (
          <Pagination totalPages={paginationInfo || 0} onPageChange={onPageChange} />
        )}
      </div>
    </>
  );
};

export default AdminAllBrands;