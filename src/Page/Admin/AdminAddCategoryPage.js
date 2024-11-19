import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";

const AdminAddCategoryPage = () => {
  return (
    <div className="">
      <div
        className=" d-flex column-direction"
        style={{ gap: "30px"}}
      >
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1" ,height:"670px", marginTop: "30px", marginRight: "20px"  }}>
          <AdminAddCategory />
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategoryPage;
