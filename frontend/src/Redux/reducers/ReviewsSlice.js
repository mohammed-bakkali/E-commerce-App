import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchData,
  postData,
  postDataWithImage,
} from "../../Hooks/httpRequests";

// Create an AsyncThunk to create a review from the API
export const createReview = createAsyncThunk(
  "review/createReview",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/products/${id}/reviews`, body);
      return response.data; // Return the data if the request is successful
    } catch (error) {
      return rejectWithValue(error.response.data); // Reject with error if the request fails
    }
  }
);


// Initial state for the slice
const initialState = {
  createReviews: [],
  loading: false,
  error: null,
};

// Create the product slice
const ReviewtSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Creat product
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
      });
  },
});

// Export the reducer as the default export
export default ReviewtSlice.reducer;
