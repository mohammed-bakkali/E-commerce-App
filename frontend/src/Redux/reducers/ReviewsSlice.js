import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchData,
  fetchDatatoken,
  postData,
  postDataWithImage,
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
      const response = await fetchDatatoken(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`);
      console.log("API Response:", response); // Log the response
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);



const initialState = {
  createReviews: [],
  allReviewsProduct: [],
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
      });
  },
});

// Export the reducer as the default export
export default ReviewtSlice.reducer;
