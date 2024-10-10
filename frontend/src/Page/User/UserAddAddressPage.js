import React from 'react';
import UserMenu from '../../Components/User/UserMenu';
import UserAddAddress from '../../Components/User/UserAddAddress';

const UserAddAddressPage = () => {
  return (
    <div className="container">
    <div
      className=" d-flex column-direction mt-20 mb-10"  style={{ gap: "30px" }}>
      <div className="">
        <UserMenu/>
      </div>
      <div style={{ flex: "1" }}>
        <UserAddAddress/>
      </div>
    </div>
  </div>
  );
}

export default UserAddAddressPage;

