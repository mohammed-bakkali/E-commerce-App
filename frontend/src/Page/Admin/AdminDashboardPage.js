import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminOverview from "../../Components/Admin/AdminOverview";

const AdminDashboardPage = () => {
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
          <AdminOverview />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
