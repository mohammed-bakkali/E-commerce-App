import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetalis";

const AdminOrderDetalisPage = () => {
  return (
    <div className="container">
      <div
        className=" d-flex column-direction mt-20 mb-10"
        style={{ gap: "30px", marginTop: "30px" }}
      >
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1" }}>
          <AdminOrderDetalis />
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetalisPage;
