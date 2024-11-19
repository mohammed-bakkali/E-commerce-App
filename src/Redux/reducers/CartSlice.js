import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchDatatoken,
  postData,
  UpdateData,
} from "../../Hooks/httpRequests";

// Async actions for cart operations
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/cart`, body);
      console.log("selice", response);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        message: error.response.data.message || "Unexpected error",
      });
    }
  }
);

export const fetchAllUserCartItems = createAsyncThunk(
  "cart/fetchAllUserCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/cart`);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/cart`);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/cart/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);
// clear All cart items
export const clearAllCartItem = createAsyncThunk(
  "cart/clearAllCartItem",
  async ( { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/cart/`);
      console.log("selice",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

// update
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/cart/${id}`, body);
      console.log("selices",response)
      return response.data
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

// Initial state for cart
const initialState = {
  addToCart: [],
  fetchAllUserCart: [],
  clearAllCart: [],
  clearItemFromCart: [],
  UpdateQuantityCart:[],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    //  add
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.addToCart = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.addToCart = action.payload;
        state.error = action.payload;
      })
      // fetch All users Cart
      .addCase(fetchAllUserCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUserCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchAllUserCart = action.payload;
      })
      .addCase(fetchAllUserCartItems.rejected, (state, action) => {
        state.loading = false;
        state.fetchAllUserCart = action.payload;
        state.error = action.payload;
      })
      // fetch
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data; // Setting fetched items
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // remove 
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.clearItemFromCart = action.payload
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // remove all item from cart
      .addCase(clearAllCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearAllCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.clearAllCart = action.payload; 
    })
      .addCase(clearAllCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.UpdateQuantityCart = action.payload; 
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
