import React from 'react';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';
import AdminAddproduct from '../../Components/Admin/AdminAddproduct';

const AdminAddproductPage = () => {
  return (
    <div className="container">
      <div className=" d-flex column-direction mt-20 mb-10" style={{ gap: "30px" }} >
        <div className="">
        <AdminSideMenu />
        </div>
        <div style={{ flex: "1" }}>
        <AdminAddproduct />
        </div>
      </div>
    </div>
  );
}

export default AdminAddproductPage;
