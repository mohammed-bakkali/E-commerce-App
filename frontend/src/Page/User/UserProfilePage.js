import React from 'react';
import UserMenu from '../../Components/User/UserMenu';
import UserProfile from '../../Components/User/UserProfile';

const UserProfilePage = () => {
  return (
    <div className="container">
    <div
      className=" d-flex column-direction mt-20 mb-10"  style={{ gap: "30px" }}>
      <div className="">
        <UserMenu/>
      </div>
      <div style={{ flex: "1" }}>
        <UserProfile/>

      </div>
    </div>
  </div>
  );
}

export default UserProfilePage;
