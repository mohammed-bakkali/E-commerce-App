import React from 'react';
import UserMenu from '../../Components/User/UserMenu';
import UserEditAddress from '../../Components/User/UserEditAddress';

const UserEditAddressPage = () => {
  return (
    <div className="container">
      <div
        className=" d-flex column-direction mt-20 mb-10"  style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1" }}>
          <UserEditAddress/>
        </div>
      </div>
    </div>
  );
}

export default UserEditAddressPage;
