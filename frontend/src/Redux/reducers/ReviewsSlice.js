import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchData,
  postData,
  postDataWithImage,
} from "../../Hooks/httpRequests";

export const createReview = createAsyncThunk(
  "review/createReview",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/products/${id}/reviews`, body);
      console.log("Response:", response); // Log the response to see its structure
      return {
        review: response.data, // Make sure response.data is what you expect
        status: response.status,
      };
    } catch (error) {
      console.log("Error:", error); // Log the error if it occurs
      return rejectWithValue(error.response?.data || error.message); // Handle error correctly
    }
  }
);


// Initial state for the slice
const initialState = {
  createReviews: null,
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
        state.createReviews = action.payload; // Store the payload directly
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer as the default export
export default ReviewtSlice.reducer;
