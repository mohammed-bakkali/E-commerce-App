import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAddproduct from "../../Components/Admin/AdminAddproduct";

const AdminAddproductPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction " style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <AdminAddproduct />
        </div>
      </div>
    </div>
  );
};

export default AdminAddproductPage;
