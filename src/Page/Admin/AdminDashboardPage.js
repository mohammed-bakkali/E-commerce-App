import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminOverview from "../../Components/Admin/AdminOverview";

const AdminDashboardPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", height: "670px", marginTop: "30px" }}>
          <AdminOverview />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
