import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserEditAddress from "../../Components/User/UserEditAddress";

const UserEditAddressPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserEditAddress />
        </div>
      </div>
    </>
  );
};

export default UserEditAddressPage;
