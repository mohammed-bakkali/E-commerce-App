import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InternetConnectionChecker from "./network/InternetConnectionChecker";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import NavbarLogin from "./Components/Uitilys/NavbarLogin";
import Footer from "./Components/Uitilys/Footer";

// Pages
import HomePage from "./Page/Home/HomePage";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductsDetalisPage from "./Page/Products/ProductsDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import PaymentMethodPage from "./Page/Checkout/PaymentMethodPage";
import AdminDashboardPage from "./Page/Admin/AdminDashboardPage";
import AdminAllProductsPages from "./Page/Admin/AdminAllProductsPages";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddSubcategoryPage from "./Page/Admin/AdminAddSubcategoryPage";
import AdminAddproductPage from "./Page/Admin/AdminAddproductPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsePage from "./Page/User/UserFavoriteProductsePage";
import UserAllAddreesPage from "./Page/User/UserAllAddreesPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import useProtectedRouteHook from "./Hook/auth/protected-route-hook";
import ProtectedRoute from "./Components/Uitilys/ProtectedRoute";
import NotFoundPage from "./Page/NotFound/NotFoundPage";
import ProductByCategory from "./Page/Products/ProductByCategory";
import ProductByBrand from "./Page/Products/ProductByBrand";
import AdminAllBrandsPage from "./Page/Admin/AdminAllBrandsPage";
import AdminAllCategorysPage from "./Page/Admin/AdminAllCategorysPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import UsersPages from "./Page/Admin/UsersPages";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAllCouponPage from "./Page/Admin/AdminAllCouponPage";
import UserAccountDashboardPage from "./Page/User/UserAccountDashboardPage";
import AdminAllSubcategoryPage from "./Page/Admin/AdminAllSubcategoryPage";



function App() {
  const { userData, isUser, isAdmin } = useProtectedRouteHook();

  // Check if the current page is an admin page
  const location = useLocation(); // Move this inside BrowserRouter
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <NavbarLogin />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <InternetConnectionChecker />
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/request-password" element={<ForgetPasswordPage />} />
        <Route path="/allcategory" element={<AllCategoryPage />} />
        <Route path="/allbrand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetalisPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/category/:id" element={<ProductByCategory />} />
        <Route path="/products/brand/:id" element={<ProductByBrand />} />


        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPages />} />

          <Route path="/admin/users" element={<UsersPages />} />
          <Route path="/admin/managebrand" element={<AdminAllBrandsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/order/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/managecategory" element={<AdminAllCategorysPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubcategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddproductPage />} />
          
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          
          <Route path="/admin/editecoupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
          <Route path="/admin/coupons" element={<AdminAllCouponPage />} />

          <Route path="admin/managesubcategory" element={<AdminAllSubcategoryPage />} />
        </Route>

        {/* User Protected Routes */}
        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsePage />} />
          <Route path="/user/addresses" element={<UserAllAddreesPage />} />
          <Route path="/user/add-addresses" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/account-dashboard" element={<UserAccountDashboardPage />} />

          <Route path="/order/payment-method" element={<PaymentMethodPage />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Conditionally render the footer */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
