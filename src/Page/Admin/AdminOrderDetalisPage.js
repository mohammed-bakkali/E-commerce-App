import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetalis";

const AdminOrderDetalisPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px" }}>
          <AdminOrderDetalis />
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetalisPage;
