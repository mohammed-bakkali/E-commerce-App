import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, postData, postDataa, UpdateData } from "../../Hooks/httpRequests";

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
      return {
        data: response.data.data, 
        token: response.data.token,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Create an AsyncThunk to foregt password
export const ForegetPassword = createAsyncThunk(
  "ForegetPassword/ForegetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/auth/forgotPasswords`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
// Update user data
export const updateUserProfileData = createAsyncThunk(
  "updateUser/updateUserProfileData",
  async (body, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/users/updateMe`, body);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser/deleteUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/users/deleteMe`);
      return { status: response.status, data: response.data };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);


// Create an AsyncThunk to update the user password
export const updateUserPassword = createAsyncThunk(
  "updateUserPassword/updateUserPassword",
  async ({body}, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/users/changeMyPassword`, body);
      console.log("selicePassword", response);
      const { message, status } = response;
      return { message, status };
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
  forgetPassword: [],
  updateUserProfile: [],
  updateUserPassword: [],
  deleteUser: [],
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
        state.creatUsers = action.payload;
      })
      // 
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteUser = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.deleteUser = action.payload;
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
        state.loginUser = action.payload;
      })

      .addCase(ForegetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ForegetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetPassword = action.payload;  // Store response correctly
      })
      .addCase(ForegetPassword.rejected, (state, action) => {
        state.loading = false;
        state.forgetPassword = action.payload;
        state.error = action.payload;
      })

      //
      .addCase(updateUserProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.updateUserProfile = action.payload;
      })
      .addCase(updateUserProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.updateUserPassword = action.payload; 
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.updateUserPassword = action.payload;
      });
  },
});

export default userSlice.reducer;
