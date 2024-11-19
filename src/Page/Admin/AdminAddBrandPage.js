import React from "react";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";

const AdminAddBrandPage = () => {
  return (
    <div className="">
      <div
        className=" d-flex column-direction"
        style={{ gap: "30px",}}
      >
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1" ,height:"670px", marginTop: "30px", marginRight: "20px"  }}>
          <AdminAddBrand />
        </div>
      </div>
    </div>
  );
};

export default AdminAddBrandPage;
