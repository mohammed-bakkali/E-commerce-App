import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/ProductSlice";
import categoryReducer from "./reducers/categorySlice";
import brandReducer from "./reducers/BrandSlice";
import subcategoryReducer from "./reducers/SubCategorySlice";
import userReducer from "./reducers/AuthSlice";
import reviewsReducer from "./reducers/ReviewsSlice";
import wishlistSliceReducer from "./reducers/WishListSlice";
import CoupnSliceReducer from "./reducers/CouponSlice";
import addressSliceReducer from "./reducers/UserAddressesSlice";
import cartSliceReducer from "./reducers/CartSlice";
import checkoutReducer from "./reducers/checkoutSlice";
import orderReducer from "./reducers/OrderManagement";
import usersReducer from "./reducers/UsersSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
    subcategory: subcategoryReducer,
    product: productsReducer,
    user: userReducer,
    users: usersReducer,
    review: reviewsReducer,
    wishlist: wishlistSliceReducer,
    coupon: CoupnSliceReducer,
    address: addressSliceReducer,
    cart: cartSliceReducer,
    checkout: checkoutReducer,
    order: orderReducer,
  },
});

export default store;
