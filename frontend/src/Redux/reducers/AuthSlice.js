import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../Hooks/httpRequests";

// Create an AsyncThunk to create a New User
export const createNewUser = createAsyncThunk(
  "createNewUser/createNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postData(`api/v1/auth/signup`, data);
      return response.data; 
    } catch (error) {
      if (error.response) {
        console.error("Server response:", error.response.data); // سجل بيانات الاستجابة
        return rejectWithValue(error.response.data); 
      }
      return rejectWithValue("Network Error");
    }
  }
);

const initialState = {
  creatUsers: [], 
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.creatUsers = action.payload; 
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
