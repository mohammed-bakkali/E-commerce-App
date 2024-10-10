import React from 'react';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';
import AdminAddCategory from '../../Components/Admin/AdminAddCategory';

const AdminAddCategoryPage = () => {
  return (
    <div className="container">
      <div className=" d-flex column-direction mt-20 mb-10" style={{ gap: "30px" }} >
        <div className="">
        <AdminSideMenu />
        </div>
        <div style={{ flex: "1" }}>
        <AdminAddCategory />
        </div>
      </div>
    </div>
  );
}

export default AdminAddCategoryPage;
