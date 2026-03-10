import React, { useState } from "react";
import useViewUsersAdminHook from "../../Hook/admin/view-users-admin-hook";
import AdminAllUserItem from "./AdminAllUserItem";
import Pagination from "../Uitilys/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, faUserCheck, faUserPlus, faUserShield, faSearch
} from "@fortawesome/free-solid-svg-icons";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --adm-bg:      #f4f6fb;
    --adm-surface: #ffffff;
    --adm-border:  #e4e8f0;
    --adm-ink:     #1a1d2e;
    --adm-muted:   #7b8299;
    --adm-blue:    #4f6ef7;
    --adm-green:   #10b981;
    --adm-amber:   #f59e0b;
    --adm-red:     #ef4444;
    --adm-indigo:  #6366f1;
    --adm-ease:    cubic-bezier(.4,0,.2,1);
    --adm-radius:  10px;
    --adm-shadow:  0 1px 3px rgba(26,29,46,.06), 0 4px 16px rgba(26,29,46,.06);
  }

  .adm-user-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--adm-bg);
    min-height: 100vh;
    padding: 32px 28px;
  }

  /* header */
  .adm-user-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .adm-user-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--adm-indigo);
    margin-bottom: 4px;
  }
  .adm-user-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  /* search */
  .adm-user-search-wrap {
    position: relative;
    width: 300px;
  }
  .adm-user-search-wrap svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--adm-muted);
    font-size: 13px;
    pointer-events: none;
  }
  .adm-user-search-input {
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
  .adm-user-search-input:focus {
    border-color: var(--adm-indigo);
    box-shadow: 0 0 0 3px rgba(99,102,241,.12);
  }
  .adm-user-search-input::placeholder { color: var(--adm-muted); }

  /* stat cards */
  .adm-user-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .adm-user-stat-card {
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
  .adm-user-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,29,46,.1);
  }
  .adm-user-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .adm-user-stat-icon.blue   { background: rgba(79,110,247,.1);  color: var(--adm-blue);   }
  .adm-user-stat-icon.green  { background: rgba(16,185,129,.1);  color: var(--adm-green);  }
  .adm-user-stat-icon.amber  { background: rgba(245,158,11,.1);  color: var(--adm-amber);  }
  .adm-user-stat-icon.indigo { background: rgba(99,102,241,.1);  color: var(--adm-indigo); }
  .adm-user-stat-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--adm-muted);
    letter-spacing: .04em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .adm-user-stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }

  /* table card */
  .adm-user-table-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    box-shadow: var(--adm-shadow);
    overflow: hidden;
  }
  .adm-user-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-user-table-count {
    font-size: 13px;
    color: var(--adm-muted);
  }
  .adm-user-table-count strong { color: var(--adm-ink); font-weight: 600; }

  .adm-user-table {
    width: 100%;
    border-collapse: collapse;
  }
  .adm-user-table thead tr { background: #f8f9fe; }
  .adm-user-table th {
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
  .adm-user-table td {
    padding: 14px 18px;
    font-size: 13.5px;
    color: var(--adm-ink);
    border-bottom: 1px solid var(--adm-border);
    vertical-align: middle;
  }
  .adm-user-table tbody tr { transition: background .15s; }
  .adm-user-table tbody tr:hover { background: #f8f9fe; }
  .adm-user-table tbody tr:last-child td { border-bottom: none; }

  /* name cell with avatar */
  .adm-user-name-cell {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .adm-user-avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--adm-indigo), var(--adm-blue));
    color: white;
    font-size: 13px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    text-transform: uppercase;
  }
  .adm-user-name { font-weight: 500; }
  .adm-user-email-sub {
    font-size: 11px;
    color: var(--adm-muted);
    margin-top: 1px;
  }

  /* role badge */
  .adm-user-role-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 50px;
  }
  .adm-user-role-badge.admin  { background: rgba(99,102,241,.12); color: var(--adm-indigo); }
  .adm-user-role-badge.user   { background: rgba(16,185,129,.12); color: var(--adm-green);  }

  /* status badge */
  .adm-user-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 50px;
  }
  .adm-user-status-badge::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .adm-user-status-badge.active   { background: rgba(16,185,129,.1);  color: var(--adm-green); }
  .adm-user-status-badge.active::before   { background: var(--adm-green); }
  .adm-user-status-badge.inactive { background: rgba(239,68,68,.1);   color: var(--adm-red);   }
  .adm-user-status-badge.inactive::before { background: var(--adm-red); }

  /* action buttons */
  .adm-user-action-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-user-btn-icon {
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
  .adm-user-btn-icon:hover { transform: scale(1.1); }
  .adm-user-btn-icon.view:hover { background: rgba(99,102,241,.1); border-color: var(--adm-indigo); color: var(--adm-indigo); }
  .adm-user-btn-icon.del:hover  { background: rgba(239,68,68,.1);  border-color: var(--adm-red);    color: var(--adm-red);    }

  /* empty */
  .adm-user-empty td {
    padding: 60px 20px !important;
    text-align: center;
    color: var(--adm-muted);
    font-size: 14px;
  }

  /* responsive */
  @media (max-width: 1024px) {
    .adm-user-stat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .adm-user-table th:nth-child(4),
    .adm-user-table td:nth-child(4) { display: none; }
  }
  @media (max-width: 640px) {
    .adm-user-page { padding: 20px 16px; }
    .adm-user-stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-user-search-wrap { width: 100%; }
    .adm-user-header { flex-direction: column; align-items: flex-start; }
    .adm-user-table th, .adm-user-table td { padding: 11px 12px; }
  }
`;

const AdminAllUser = () => {
  const { loading, response, pagination, handlePageClick, totalUsers } =
    useViewUsersAdminHook();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = response.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mostActiveUser  = response.length > 0 ? response[0].name                    : "N/A";
  const latestUser      = response.length > 0 ? response[response.length - 1].name  : "N/A";
  const activeCount     = response.filter(u => u.active).length;

  return (
    <>
      <style>{css}</style>
      <div className="adm-user-page">

        {/* ── Header ── */}
        <div className="adm-user-header">
          <div>
            <div className="adm-user-eyebrow">Admin Panel</div>
            <div className="adm-user-title">All Users</div>
          </div>
          <div className="adm-user-search-wrap">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="adm-user-search-input"
            />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="adm-user-stat-grid">
          <div className="adm-user-stat-card">
            <div className="adm-user-stat-icon blue">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <div className="adm-user-stat-label">Total Users</div>
              <div className="adm-user-stat-value">{totalUsers}</div>
            </div>
          </div>
          <div className="adm-user-stat-card">
            <div className="adm-user-stat-icon green">
              <FontAwesomeIcon icon={faUserCheck} />
            </div>
            <div>
              <div className="adm-user-stat-label">Most Active</div>
              <div className="adm-user-stat-value" title={mostActiveUser}>{mostActiveUser}</div>
            </div>
          </div>
          <div className="adm-user-stat-card">
            <div className="adm-user-stat-icon amber">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div>
              <div className="adm-user-stat-label">Latest User</div>
              <div className="adm-user-stat-value" title={latestUser}>{latestUser}</div>
            </div>
          </div>
          <div className="adm-user-stat-card">
            <div className="adm-user-stat-icon indigo">
              <FontAwesomeIcon icon={faUserShield} />
            </div>
            <div>
              <div className="adm-user-stat-label">Active Accounts</div>
              <div className="adm-user-stat-value">{activeCount}</div>
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="adm-user-table-card">
          <div className="adm-user-table-toolbar">
            <span className="adm-user-table-count">
              Showing <strong>{filteredUsers.length}</strong> of <strong>{totalUsers}</strong> users
            </span>
          </div>
          <table className="adm-user-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <AdminAllUserItem key={user._id || index} user={user} />
                ))
              ) : (
                <tr className="adm-user-empty">
                  <td colSpan="6">
                    {searchTerm ? `No users matching "${searchTerm}"` : "No users found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        {pagination.numberOfPages >= 2 && (
          <Pagination
            totalPages={pagination.numberOfPages || 0}
            onPageChange={handlePageClick}
          />
        )}
      </div>
    </>
  );
};

export default AdminAllUser;