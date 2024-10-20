import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../Hooks/httpRequests";

// Create an AsyncThunk to add a product to the wishlist
// Create an AsyncThunk to add a product to the wishlist
export const addProductToWishList = createAsyncThunk(
  "wishlist/addProductToWishList",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/wishlist/`, body);
      if (response.data.data) {
        return {
          wishlist: response.data.data, 
        };
      } else {
        return { wishlist: [] }; 
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

const initialState = {
  addWishlistList: [],
  loading: false,
  error: null,
};

const wishlistSlice  = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Handling fetchAllBrands actions
      .addCase(addProductToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.addWishlistList;
      })
      .addCase(addProductToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
