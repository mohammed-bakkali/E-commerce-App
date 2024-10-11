import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../Hooks/httpRequests";

// Create an AsyncThunk to create a New User
export const createNewUser = createAsyncThunk(
  "createNewUser/createNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postData(`api/v1/auth/signup`, data);
      return response; 
    } catch (error) {
      // إذا كان هناك استجابة من الخادم
      if (error.response) {
        console.error("Server response:", error.response.data); // سجل بيانات الاستجابة
        return rejectWithValue(error.response.data); 
      }
      return rejectWithValue("Network Error");
    }
  }
);



const initialState = {
  creatUsers: [], // Changed from brands to users
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user", // Changed from "brand" to "user"
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Handling create New User actions
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.creatUsers.push(action.payload); // Store the new user data
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
