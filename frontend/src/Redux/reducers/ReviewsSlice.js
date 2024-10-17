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
      return response; // Return the data if the request is successful
    } catch (error) {
      // Pass the error message to the rejected action
      return rejectWithValue(error.response.data); // تعديل هنا لتمرير رسالة الخطأ
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
