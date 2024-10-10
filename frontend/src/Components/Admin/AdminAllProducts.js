import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <>
      <div className=" mb-10 fw-bold fs-20">Management all Product </div>
      <div className="responsive-grid-250">
        {products ? (
          products.map((element, index) => (
            // eslint-disable-next-line no-undef
            <AdminAllProductsCard key={index} element={element} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default AdminAllProducts;
