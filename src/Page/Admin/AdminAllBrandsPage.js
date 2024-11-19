import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAllBrands from "../../Components/Admin/AdminAllBrands";

const AdminAllBrandsPage = () => {
  return (
    <div className="">
      <div className="d-flex column-direction" style={{ gap: "30px" }}>
        <div>
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <AdminAllBrands />
        </div>
      </div>
    </div>
  );
};

export default AdminAllBrandsPage;
