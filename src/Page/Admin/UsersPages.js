import React from 'react';
import UserMenu from '../../Components/User/UserMenu';
import AdminAllUser from '../../Components/Admin/AdminAllUser';
import AdminSideMenu from '../../Components/Admin/AdminSideMenu';

const UsersPages = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <AdminAllUser />
        </div>
      </div>
    </>
  );
}

export default UsersPages;
