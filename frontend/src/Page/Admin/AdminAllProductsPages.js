import React from "react";
import AdminSideMenu from "../../Components/Admin/AdminSideMenu";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitilys/Pagination";
import useViewProductsAdminHook from "../../Hook/admin/view-products-admin-hook";

const AdminAllProductsPages = () => {
  const { items, paginationInfo, onPageChange } = useViewProductsAdminHook();

  const totalPages = paginationInfo ? paginationInfo : 0;

  return (
    <div className="container">
      <div className="d-flex column-direction mt-20 mb-10" style={{ gap: "30px" }}>
        <div>
          <AdminSideMenu />
        </div>
        <div style={{ flex: "1" }}>
          <AdminAllProducts products={items} />
          {totalPages > 1 ? (
            <Pagination totalPages={totalPages} onPageChange={onPageChange} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminAllProductsPages;
