import React, { useState } from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";
import { Link } from "react-router-dom";

const AdminAllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-10 fw-bold fs-20">All Product List</div>
      
      {/* Search Bar */}
      <div className="search-container mb-20">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Add Product Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
          <button className="btn-add">Add New Product</button>
        </Link>
      </div>

      {/* Product Cards */}
      <div className="responsive-grid-250" style={{ gap: "6px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((element, index) => (
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
