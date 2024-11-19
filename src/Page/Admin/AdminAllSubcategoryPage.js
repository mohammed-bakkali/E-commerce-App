import React from 'react';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';
import AdminAllSubcategorys from '../../Components/Admin/AdminAllSubcategorys';

const AdminAllSubcategoryPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <AdminAllSubcategorys />
        </div>
      </div>
    </>
  );
}

export default AdminAllSubcategoryPage;
