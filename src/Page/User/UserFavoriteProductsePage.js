import React from "react";
import UserMenu from "../../Components/User/UserMenu";
import UserFavoriteProductse from "../../Components/User/UserFavoriteProductse";

const UserFavoriteProductsePage = () => {
  return (
    <>
      <div className="d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <UserMenu />
        </div>
        <div style={{ flex: "1", marginTop: "30px", marginRight: "20px" }}>
          <UserFavoriteProductse />
        </div>
      </div>
    </>
  );
};

export default UserFavoriteProductsePage;
