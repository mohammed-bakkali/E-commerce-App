import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchData,
  fetchDatatoken,
  postData,
  postDataWithImage,
  UpdateData,
} from "../../Hooks/httpRequests";

export const createReview = createAsyncThunk(
  "review/createReview",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/products/${id}/reviews`, body);
      return response.data; // Return the data if the request is successful
    } catch (error) {
      // Pass the error message to the rejected action
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllProductReview = createAsyncThunk(
  "review/fetchAllProductsReview",
  async ({ id, page, limit }, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(
        `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProductReview = createAsyncThunk(
  "review/deleteProductReview",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/reviews/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const editeAllProductReview = createAsyncThunk(
  "review/editeAllProductReview",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/reviews/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  createReviews: [],
  allReviewsProduct: [],
  deleteReviewsProduct: [],
  editeReviewsProduct: [],
  loading: false,
  error: null,
};

const ReviewtSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Create Review
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = false;
        state.createReviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch All Reviews
      .addCase(fetchAllProductReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProductReview.fulfilled, (state, action) => {
        state.loading = false;
        state.allReviewsProduct = action.payload;
      })
      .addCase(fetchAllProductReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Reviews
      .addCase(deleteProductReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProductReview.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteReviewsProduct = action.payload.deleteReviewsProduct;
      })
      .addCase(deleteProductReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edite Reviews
      .addCase(editeAllProductReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editeAllProductReview.fulfilled, (state, action) => {
        state.loading = false;
        state.editeReviewsProduct = action.payload;
      })
      .addCase(editeAllProductReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer as the default export
export default ReviewtSlice.reducer;
