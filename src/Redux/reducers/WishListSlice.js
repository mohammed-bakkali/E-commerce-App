import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, fetchDatatoken, postData } from "../../Hooks/httpRequests";

// Create an AsyncThunk to add a product to the wishlist
export const addProductToWishList = createAsyncThunk(
  "wishlist/addProductToWishList",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/wishlist`, { productId });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const deleteProductToWishList = createAsyncThunk(
  "wishlist/deleteProductToWishList",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/wishlist/${productId}`, "DELETE");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const fetchAllProductToWishList = createAsyncThunk(
  "wishlist/fetchAllProductToWishList",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/wishlist`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

const initialState = {
  addWishlistList: [],
  deleteWishlistList: [],
  allProductWishlistList: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addProductToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.addWishlistList = action.payload;
      })

      .addCase(addProductToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProductToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteWishlistList = action.payload;
      })
      .addCase(deleteProductToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchAllProductToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProductToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.allProductWishlistList = action.payload;
      })

      .addCase(fetchAllProductToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
