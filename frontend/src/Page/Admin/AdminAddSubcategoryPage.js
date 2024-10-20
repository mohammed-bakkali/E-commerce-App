import React from 'react';
import AdminAddSubcategory from '../../Components/Admin/AdminAddSubcategory';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';

const AdminAddSubcategoryPage = () => {
  return (
    <div className="container">
      <div className=" d-flex column-direction mt-20 mb-10" style={{ gap: "30px", marginTop: "30px" }} >
        <div className="">
        <AdminSideMenu />
        </div>
        <div style={{ flex: "1" ,height:"670px" }}>
        <AdminAddSubcategory />
        </div>
      </div>
    </div>
  );
}

export default AdminAddSubcategoryPage;
