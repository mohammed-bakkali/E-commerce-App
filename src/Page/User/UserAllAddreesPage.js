import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserAllAddrees from "../../Components/User/UserAllAddrees";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";

const UserAllAddreesPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserAllAddrees />
        </div>
      </div>
    </>
  );
};

export default UserAllAddreesPage;
