import React, { useState } from "react";
import { Link } from "react-router-dom";
import useViewCouponsHook from "../../Hook/coupon/view-coupons-hook";
import AdminCouponCard from "./AdminCouponCard";

const AdminAllCoupons = () => {
  const { coupons } = useViewCouponsHook();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter coupons based on search term
  const filteredCoupons = coupons.filter((coupon) =>
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="overview-container">
        <div className="overview-title">All Coupons List</div>

        {/* Search Bar */}
        <div className="search-container mb-20">
          <input
            type="text"
            placeholder="Search coupons by code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Link to="/admin/addcoupon" style={{ textDecoration: "none" }}>
            <button className="btn-add">Add New Coupon</button>
          </Link>
        </div>

        <table className="overview-table">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Discount (%)</th>
              <th>Created At</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.length > 0 ? (
              filteredCoupons.map((coupon, index) => (
                <AdminCouponCard key={index} coupon={coupon} />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No coupons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminAllCoupons;
