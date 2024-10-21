import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, postData } from "../../Hooks/httpRequests";

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

export const deleteProductToWishList = createAsyncThunk(
  "wishlist/deleteProductToWishList",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/wishlist/${id}`);
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
  deleteWishlistList: [],
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
        state.addWishlistList = action.payload.addWishlistList;
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
        state.deleteWishlistList = action.payload.deleteWishlistList;
      })
      .addCase(deleteProductToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
