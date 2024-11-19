import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchDatatoken,
  postData,
  UpdateData,
} from "../../Hooks/httpRequests";

export const createCoupon = createAsyncThunk(
  "coupon/createCoupon",
  async ({ body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/coupons`, body);

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

export const fetchAllCoupn = createAsyncThunk(
  "review/fetchAllProductsReview",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/coupons`);
      console.log("sice 1", response.data.data);
      console.log("sice 2", response.data);
      console.log("sice3", response);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const deleteCoupon = createAsyncThunk(
  "coupn/deleteCoupn",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/coupons/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);
export const editCoupon = createAsyncThunk(
  "coupn/editCoupon",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/coupons/${id}`, body);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

// Applay Coupn Cart
export const applayCoupnCart = createAsyncThunk(
  "coupn/applayCoupnCart",
  async ({ body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/cart/applyCoupon`, body);
      console.log("selice", response);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const fetchOneCoupon = createAsyncThunk(
  "coupon/fetchOneCoupon",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/coupons/${id}`);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

const initialState = {
  createCoupon: [],
  allCoupn: [],
  deleteCoupn: [],
  editCoupon: [],
  singleCoupon: [],
  applayCoupon: [],
  loading: false,
  error: null,
};

const CoupnSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Create Review
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.createCoupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.createCoupon = action.payload;
        state.error = action.payload;
      })
      // Fetch All Coupn
      .addCase(fetchAllCoupn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCoupn.fulfilled, (state, action) => {
        state.loading = false;
        state.allCoupn = action.payload;
      })
      .addCase(fetchAllCoupn.rejected, (state, action) => {
        state.loading = false;
        state.allCoupn = action.payload;
        state.error = action.payload;
      })
      // Delete Coupn
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteCoupn = action.payload;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.loading = false;
        state.deleteCoupn = action.payload;
        state.error = action.payload;
      })
      // Edite Reviews
      .addCase(editCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.editCoupon = action.payload;
      })
      .addCase(editCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Applay Coupn Cart
      .addCase(applayCoupnCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applayCoupnCart.fulfilled, (state, action) => {
        state.loading = false;
        state.applayCoupon = action.payload;
      })
      .addCase(applayCoupnCart.rejected, (state, action) => {
        state.loading = false;
        state.applayCoupon = action.payload;
        state.error = action.payload;
      })
      //
      .addCase(fetchOneCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCoupon = action.payload;
      })
      .addCase(fetchOneCoupon.rejected, (state, action) => {
        state.loading = false;
        state.singleCoupon = action.payload;
        state.error = action.payload;
      });
  },
});

// Export the reducer as the default export
export default CoupnSlice.reducer;
