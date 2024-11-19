import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminEditproduct from "../../Components/Admin/AdminEditproduct";

const AdminEditProductsPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px" }}>
          <AdminEditproduct />
        </div>
      </div>
    </div>
  );
};

export default AdminEditProductsPage;
