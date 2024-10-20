import React from "react";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";

const AdminAddBrandPage = () => {
  return (
    <div className="container">
      <div
        className=" d-flex column-direction mt-20 mb-10"
        style={{ gap: "30px", marginTop: "30px" }}
      >
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", height: "670px" }}>
          <AdminAddBrand />
        </div>
      </div>
    </div>
  );
};

export default AdminAddBrandPage;
