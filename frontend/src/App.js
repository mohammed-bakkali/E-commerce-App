import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import NavbarLogin from "./Components/Uitilys/NavbarLogin";
import Footer from "./Components/Uitilys/Footer";
import LoginPage from "./Page/Auth/LoginPage";
import RogisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductsDetalisPage from "./Page/Products/ProductsDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import PaymentMethodPage from "./Page/Checkout/PaymentMethodPage";
import AdminAllProductsPages from "./Page/Admin/AdminAllProductsPages";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubcategoryPage from "./Page/Admin/AdminAddSubcategoryPage";
import AdminAddproductPage from "./Page/Admin/AdminAddproductPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsePage from "./Page/User/UserFavoriteProductsePage";
import UserAllAddreesPage from "./Page/User/UserAllAddreesPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage"
import AdminDashboardPage from "./Page/Admin/AdminDashboardPage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import RequestPasswordResetPage from "./Page/Auth/ForgetPasswordPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";

function App() {
  return (
    <div>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RogisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/payment-method" element={<PaymentMethodPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPages />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/order/01" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubcategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddproductPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsePage />} />
          <Route path="/user/addresses" element={<UserAllAddreesPage />} />
          <Route path="/user/add-addresses" element={<UserAddAddressPage />} />
          <Route path="/user/edite-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
          <Route path="/user/request-password" element={<ForgetPasswordPage />} />
          
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
