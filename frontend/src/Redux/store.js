import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/ProductSlice";
import categoryReducer from "./reducers/categorySlice";
import brandReducer from "./reducers/BrandSlice";
import subcategoryReducer from "./reducers/SubCategorySlice";
import userReducer from "./reducers/AuthSlice";
import reviewsReducer from "./reducers/WishListSlice";
import wishlistSliceReducer from "./reducers/ReviewsSlice";
// import cartReducer from "./reducers/cartSlice";
// import adminReducer from "./reducers/adminSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
    subcategory: subcategoryReducer,
    product: productsReducer,
    user: userReducer,
    review: reviewsReducer,
    wishlist: wishlistSliceReducer,
    // cart: cartReducer,
    // admin: adminReducer,
  },
});

export default store;
