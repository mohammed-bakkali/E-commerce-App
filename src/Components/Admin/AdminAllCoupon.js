import React, { useState } from "react";
import { Link } from "react-router-dom";
import useViewCouponsHook from "../../Hook/coupon/view-coupons-hook";
import AdminCouponCard from "./AdminCouponCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faPlus, faTicketAlt,
  faCheckCircle, faClock, faFire
} from "@fortawesome/free-solid-svg-icons";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --adm-bg:      #f4f6fb;
    --adm-surface: #ffffff;
    --adm-border:  #e4e8f0;
    --adm-ink:     #1a1d2e;
    --adm-muted:   #7b8299;
    --adm-emerald: #059669;
    --adm-green:   #10b981;
    --adm-amber:   #f59e0b;
    --adm-red:     #ef4444;
    --adm-orange:  #f97316;
    --adm-ease:    cubic-bezier(.4,0,.2,1);
    --adm-radius:  10px;
    --adm-shadow:  0 1px 3px rgba(26,29,46,.06), 0 4px 16px rgba(26,29,46,.06);
  }

  .adm-coup-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--adm-bg);
    min-height: 100vh;
    padding: 32px 28px;
  }

  /* header */
  .adm-coup-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .adm-coup-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--adm-emerald);
    margin-bottom: 4px;
  }
  .adm-coup-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  /* header right: search + add button */
  .adm-coup-header-right {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .adm-coup-search-wrap {
    position: relative;
    width: 260px;
  }
  .adm-coup-search-wrap svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--adm-muted);
    font-size: 13px;
    pointer-events: none;
  }
  .adm-coup-search-input {
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
  .adm-coup-search-input:focus {
    border-color: var(--adm-emerald);
    box-shadow: 0 0 0 3px rgba(5,150,105,.12);
  }
  .adm-coup-search-input::placeholder { color: var(--adm-muted); }

  /* add button */
  .adm-coup-add-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--adm-emerald);
    color: white;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .04em;
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background .2s, transform .2s, box-shadow .2s;
  }
  .adm-coup-add-btn:hover {
    background: var(--adm-green);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(5,150,105,.3);
  }

  /* stat cards */
  .adm-coup-stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .adm-coup-stat-card {
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
  .adm-coup-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,29,46,.1);
  }
  .adm-coup-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .adm-coup-stat-icon.emerald { background: rgba(5,150,105,.1);   color: var(--adm-emerald); }
  .adm-coup-stat-icon.amber   { background: rgba(245,158,11,.1);  color: var(--adm-amber);   }
  .adm-coup-stat-icon.red     { background: rgba(239,68,68,.1);   color: var(--adm-red);     }
  .adm-coup-stat-icon.orange  { background: rgba(249,115,22,.1);  color: var(--adm-orange);  }
  .adm-coup-stat-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--adm-muted);
    letter-spacing: .04em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .adm-coup-stat-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--adm-ink);
    line-height: 1;
  }

  /* table card */
  .adm-coup-table-card {
    background: var(--adm-surface);
    border: 1px solid var(--adm-border);
    border-radius: var(--adm-radius);
    box-shadow: var(--adm-shadow);
    overflow: hidden;
  }
  .adm-coup-table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--adm-border);
  }
  .adm-coup-table-count {
    font-size: 13px;
    color: var(--adm-muted);
  }
  .adm-coup-table-count strong { color: var(--adm-ink); font-weight: 600; }

  .adm-coup-table {
    width: 100%;
    border-collapse: collapse;
  }
  .adm-coup-table thead tr { background: #f8f9fe; }
  .adm-coup-table th {
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
  .adm-coup-table td {
    padding: 14px 18px;
    font-size: 13.5px;
    color: var(--adm-ink);
    border-bottom: 1px solid var(--adm-border);
    vertical-align: middle;
  }
  .adm-coup-table tbody tr { transition: background .15s; }
  .adm-coup-table tbody tr:hover { background: #f8f9fe; }
  .adm-coup-table tbody tr:last-child td { border-bottom: none; }

  /* coupon code chip */
  .adm-coup-code-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: monospace;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .1em;
    background: rgba(5,150,105,.08);
    color: var(--adm-emerald);
    border: 1px dashed rgba(5,150,105,.35);
    padding: 5px 12px;
    border-radius: 6px;
  }

  /* discount badge */
  .adm-coup-discount-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(249,115,22,.1);
    color: var(--adm-orange);
    font-size: 13px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 50px;
  }

  /* date badge */
  .adm-coup-date-badge {
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

  /* expiry badge — turns red if expired */
  .adm-coup-expiry-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 50px;
    border: 1px solid var(--adm-border);
  }
  .adm-coup-expiry-badge.valid   { background: rgba(16,185,129,.08); color: var(--adm-green); border-color: rgba(16,185,129,.2); }
  .adm-coup-expiry-badge.expired { background: rgba(239,68,68,.08);  color: var(--adm-red);   border-color: rgba(239,68,68,.2);  }

  /* action buttons */
  .adm-coup-action-group { display: flex; align-items: center; gap: 8px; }
  .adm-coup-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 6px;
    border: 1.5px solid transparent;
    cursor: pointer;
    text-decoration: none;
    transition: background .2s, transform .15s, box-shadow .2s;
  }
  .adm-coup-btn:hover { transform: translateY(-1px); }
  .adm-coup-btn.edit  {
    background: rgba(245,158,11,.1);
    color: var(--adm-amber);
    border-color: rgba(245,158,11,.25);
  }
  .adm-coup-btn.edit:hover  { background: rgba(245,158,11,.2); box-shadow: 0 4px 12px rgba(245,158,11,.2); }
  .adm-coup-btn.del   {
    background: rgba(239,68,68,.08);
    color: var(--adm-red);
    border-color: rgba(239,68,68,.2);
  }
  .adm-coup-btn.del:hover   { background: rgba(239,68,68,.16); box-shadow: 0 4px 12px rgba(239,68,68,.15); }

  /* empty */
  .adm-coup-empty td {
    padding: 60px 20px !important;
    text-align: center;
    color: var(--adm-muted);
    font-size: 14px;
  }

  /* responsive */
  @media (max-width: 1024px) { .adm-coup-stat-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 640px) {
    .adm-coup-page { padding: 20px 16px; }
    .adm-coup-stat-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .adm-coup-header { flex-direction: column; align-items: flex-start; }
    .adm-coup-header-right { width: 100%; }
    .adm-coup-search-wrap { width: 100%; flex: 1; }
    .adm-coup-table th, .adm-coup-table td { padding: 11px 12px; }
  }
`;

const AdminAllCoupons = () => {
  const { coupons } = useViewCouponsHook();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const now = new Date();
  const activeCoupons  = coupons.filter(c => new Date(c.expire) > now).length;
  const expiredCoupons = coupons.filter(c => new Date(c.expire) <= now).length;
  const avgDiscount    = coupons.length
    ? Math.round(coupons.reduce((s, c) => s + (c.discount || 0), 0) / coupons.length)
    : 0;

  return (
    <>
      <style>{css}</style>
      <div className="adm-coup-page">

        {/* ── Header ── */}
        <div className="adm-coup-header">
          <div>
            <div className="adm-coup-eyebrow">Admin Panel</div>
            <div className="adm-coup-title">All Coupons</div>
          </div>
          <div className="adm-coup-header-right">
            <div className="adm-coup-search-wrap">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search by coupon code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="adm-coup-search-input"
              />
            </div>
            <Link to="/admin/addcoupon" className="adm-coup-add-btn">
              <FontAwesomeIcon icon={faPlus} />
              Add Coupon
            </Link>
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="adm-coup-stat-grid">
          <div className="adm-coup-stat-card">
            <div className="adm-coup-stat-icon emerald">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <div>
              <div className="adm-coup-stat-label">Total Coupons</div>
              <div className="adm-coup-stat-value">{coupons.length}</div>
            </div>
          </div>
          <div className="adm-coup-stat-card">
            <div className="adm-coup-stat-icon amber">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="adm-coup-stat-label">Active</div>
              <div className="adm-coup-stat-value">{activeCoupons}</div>
            </div>
          </div>
          <div className="adm-coup-stat-card">
            <div className="adm-coup-stat-icon red">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <div className="adm-coup-stat-label">Expired</div>
              <div className="adm-coup-stat-value">{expiredCoupons}</div>
            </div>
          </div>
          <div className="adm-coup-stat-card">
            <div className="adm-coup-stat-icon orange">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div>
              <div className="adm-coup-stat-label">Avg. Discount</div>
              <div className="adm-coup-stat-value">{avgDiscount}%</div>
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="adm-coup-table-card">
          <div className="adm-coup-table-toolbar">
            <span className="adm-coup-table-count">
              Showing <strong>{filteredCoupons.length}</strong> of <strong>{coupons.length}</strong> coupons
            </span>
          </div>
          <table className="adm-coup-table">
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Created At</th>
                <th>Expires</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoupons.length > 0 ? (
                filteredCoupons.map((coupon) => (
                  <AdminCouponCard key={coupon._id} coupon={coupon} />
                ))
              ) : (
                <tr className="adm-coup-empty">
                  <td colSpan="5">
                    {searchTerm ? `No coupons matching "${searchTerm}"` : "No coupons found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminAllCoupons;