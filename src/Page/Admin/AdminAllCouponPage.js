import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAllCoupons from "../../Components/Admin/AdminAllCoupon";

const AdminAllCouponPage = () => {
  return (
    <div className="">
      <div className="d-flex column-direction" style={{ gap: "30px" }}>
        <div>
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px",marginRight: "20px"  }}>
          <AdminAllCoupons />
        </div>
      </div>
    </div>
  );
};

export default AdminAllCouponPage;
