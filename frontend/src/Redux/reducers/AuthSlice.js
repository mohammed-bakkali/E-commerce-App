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
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Create an AsyncThunk to create a New User
export const LoginUser = createAsyncThunk(
  "LoginUser/LoginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/auth/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

const initialState = {
  creatUsers: [],
  loginUser: [],
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
      })

      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loginUser = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


  },
});

export default userSlice.reducer;
