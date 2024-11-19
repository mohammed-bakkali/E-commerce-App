import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserAllOrder from "../../Components/User/UserAllOrder";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";

const UserAllOrdersPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserAllOrder />
        </div>
      </div>
    </>
  );
};

export default UserAllOrdersPage;
