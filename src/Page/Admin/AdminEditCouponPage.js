import React from "react";
import AdminEditCoupon from "../../Components/Admin/AdminEditCoupon";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";

const AdminEditCouponPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px" }}>
          <AdminEditCoupon />
        </div>
      </div>
    </div>
  );
};

export default AdminEditCouponPage;
