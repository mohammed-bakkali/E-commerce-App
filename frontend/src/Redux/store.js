import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/ProductSlice"; 
import categoryReducer from "./reducers/categorySlice";
import brandReducer from "./reducers/BrandSlice"
import subcategoryReducer from "./reducers/SubCategorySlice";
// import cartReducer from "./reducers/cartSlice";
// import userReducer from "./reducers/userSlice";
// import adminReducer from "./reducers/adminSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
    subcategory: subcategoryReducer,
    product: productsReducer,
    // cart: cartReducer,
    // user: userReducer,
    // admin: adminReducer,
  },
});

export default store;
