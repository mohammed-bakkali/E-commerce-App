import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchData,
  fetchDatatoken,
  postData,
  UpdateData,
} from "../../Hooks/httpRequests";



export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async ( {page, limit}, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(

        `/api/v1/users?page=${page}&limit=${limit}`
      );
      console.log(response)
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ( {id} ,{ rejectWithValue }) => {
    try {
      const response = await deleteData(
        `/api/v1/users/${id}`
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  allusers: [],
  deleteReviewsProduct: [],
  loading: false,
  error: null,
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch All Reviews
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allusers = action.payload;
    })
    

      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Reviews
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteReviewsProduct = action.payload.deleteReviewsProduct;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

// Export the reducer as the default export
export default ReviewSlice.reducer;
