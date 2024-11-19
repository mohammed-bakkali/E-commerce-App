import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchData,
  postData,
  UpdateData,
} from "../../Hooks/httpRequests";

// Create Order Cash for User
export const createOrderCash = createAsyncThunk(
  "order/createOrderCash",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/orders/${id}/`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch all orders for a specific user or general orders
export const fetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders",
  async ({ userId, page, limit }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `/api/v1/users/${userId}/orders?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete a specific order
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async ({ orderId }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/orders/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Edit a specific order
export const editOrder = createAsyncThunk(
  "order/editOrder",
  async ({ orderId, body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/orders/${orderId}`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createOrderCard = createAsyncThunk(
  "order/createOrderCard",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `/api/v1/orders/checkout-session/${id}/`,
        body
      );
      console.log("checkout-session", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  createdOrderCash: [],
  createdOrderCard: [],
  allOrders: [],
  deletedOrder: null,
  editedOrder: null,
  loading: false,
  error: null,
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Order Cash
      .addCase(createOrderCash.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderCash.fulfilled, (state, action) => {
        state.loading = false;
        state.createdOrderCash = action.payload;
      })
      .addCase(createOrderCash.rejected, (state, action) => {
        state.loading = false;
        state.createdOrderCash = action.payload;
        state.error = action.payload;
      })
      // Create Order Card
      .addCase(createOrderCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderCard.fulfilled, (state, action) => {
        state.loading = false;
        state.createdOrderCard = action.payload;
      })
      .addCase(createOrderCard.rejected, (state, action) => {
        state.loading = false;
        state.createdOrderCard = action.payload;
        state.error = action.payload;
      })

      // Fetch All Orders
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.allOrders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Order
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedOrder = action.payload;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit Order
      .addCase(editOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.editedOrder = action.payload;
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer as the default export
export default OrderSlice.reducer;
