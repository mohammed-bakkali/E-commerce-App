import React from 'react';
import AdminAddSubcategory from '../../Components/Admin/AdminAddSubcategory';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';

const AdminAddSubcategoryPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px"}} >
        <div className="">
        <AdminSideMenu />
        </div>
        <div style={{ flex: "1" ,height:"670px", marginTop: "30px",marginRight: "20px"  }}>
        <AdminAddSubcategory />
        </div>
      </div>
    </div>
  );
}

export default AdminAddSubcategoryPage;
