import React from 'react';
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Pagination from "../../Components/Uitilys/Pagination";


const AdminAllOrdersPage = () => {
  return (
    <div className="container">
      <div className=" d-flex column-direction mt-20 mb-10" style={{ gap: "30px" }} >
        <div className="">
        <AdminSideMenu />
        </div>
        <div style={{ flex: "1" }}>
        <AdminAllOrders />
        <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default AdminAllOrdersPage;
