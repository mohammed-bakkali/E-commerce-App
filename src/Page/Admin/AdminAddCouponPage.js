import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAddCoupon from "../../Components/Admin/AdminAddCoupon";

const AdminAddCouponPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <AdminAddCoupon />
        </div>
      </div>
    </div>
  );
};

export default AdminAddCouponPage;
