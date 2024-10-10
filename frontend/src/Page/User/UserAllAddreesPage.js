import React from 'react';
import UserMenu from '../../Components/User/UserMenu';
import UserAddreesCard from '../../Components/User/UserAddreesCard';

const UserAllAddreesPage = () => {
  return (
    <div className="container">
    <div
      className=" d-flex column-direction mt-20 mb-10"  style={{ gap: "30px" }}>
      <div className="">
        <UserMenu/>
      </div>
      <div style={{ flex: "1" }}>
        <UserAddreesCard/>

      </div>
    </div>
  </div>
  );
}

export default UserAllAddreesPage;
