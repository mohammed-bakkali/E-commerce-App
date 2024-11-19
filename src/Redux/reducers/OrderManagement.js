import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDatatoken,
  UpdateData,
} from "../../Hooks/httpRequests";

// Fetch all orders for a specific user or general orders
export const fetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders",
  async ({ limit, page },{ rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/orders/?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOneOrder = createAsyncThunk(
  "order/fetchOneOrder",
  async ({ id },{ rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/orders/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changeOrderPayment = createAsyncThunk(
  "order/changeOrderPayment",
  async ({ id },{ rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/orders/${id}/pay`);
      console.log("Payment",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changeOrderdelivery= createAsyncThunk(
  "order/changeOrderdelivery",
  async ({ id },{ rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/orders/${id}/deliver`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  allOrders: [],
  fetchOneOrder: [],
  changePayment: [],
  changedelivery: [],
  loading: false,
  error: null,
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.allOrders = action.payload;
        state.error = action.payload;
      })
      // Fetch One Orders
      .addCase(fetchOneOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchOneOrder = action.payload;
      })
      .addCase(fetchOneOrder.rejected, (state, action) => {
        state.loading = false;
        state.fetchOneOrder = action.payload;
        state.error = action.payload;
      })
      // Change Ordder Payment
      .addCase(changeOrderPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeOrderPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.changePayment = action.payload;
      })
      .addCase(changeOrderPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Change Ordder Derdelivery
      .addCase(changeOrderdelivery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeOrderdelivery.fulfilled, (state, action) => {
        state.loading = false;
        state.changedelivery = action.payload;
      })
      .addCase(changeOrderdelivery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

// Export the reducer as the default export
export default OrderSlice.reducer;
