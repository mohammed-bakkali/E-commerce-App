import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Pagination from "../../Components/Uitilys/Pagination";

const AdminAllOrdersPage = () => {
  return (
    <div className="">
      <div className=" d-flex column-direction" style={{ gap: "30px" }}>
        <div className="">
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1", height: "670px", marginTop: "30px", marginRight: "20px"  }}>
          <AdminAllOrders />
        </div>
      </div>
    </div>
  );
};

export default AdminAllOrdersPage;