import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserProfile from "../../Components/User/UserProfile";

const UserProfilePage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
