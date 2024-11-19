import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserAddAddress from "../../Components/User/UserAddAddress";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";

const UserAddAddressPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
        {/* <NavbarLogin /> */}
          <UserAddAddress />
        </div>
      </div>
    </>
  );
};

export default UserAddAddressPage;
