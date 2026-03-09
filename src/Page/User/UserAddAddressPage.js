import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserAddAddress from "../../Components/User/UserAddAddress";

const UserAddAddressPage = () => {
  return (
    <div className="d-flex column-direction" style={{ gap: "30px" }}>
      <div>
        <UserMenu />
      </div>
      <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
        <UserAddAddress />
      </div>
    </div>
  );
};

export default UserAddAddressPage;