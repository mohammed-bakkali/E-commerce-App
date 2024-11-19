import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserAccountDashboard from "../../Components/User/UserAccountDashboard";
import NavbarLogin from "../../Components/Uitilys/NavbarLogin";

const UserAccountDashboardPage = () => {
  return (
    <>
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserAccountDashboard />
        </div>
      </div>
    </>
  );
};

export default UserAccountDashboardPage;
