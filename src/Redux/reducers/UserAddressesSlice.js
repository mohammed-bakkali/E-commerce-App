import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchDatatoken,
  postData,
  UpdateData,
} from "../../Hooks/httpRequests";


export const createAddress = createAsyncThunk(
  "address/createAddress",
  async ({ body }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/addresses`, body);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        message: error.response.data.message || "Unexpected error",
      });
    }
  }
);


export const fetchAllAddresses = createAsyncThunk(
  "address/fetchAllAddresses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/addresses`);
    
      const { data, status } = response;
      console.log("seleceAddresse",data)
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/addresses/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);


export const fetchOneAddress = createAsyncThunk(
  "address/fetchOneAddress",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchDatatoken(`/api/v1/addresses/${id}`);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);


export const editAddress = createAsyncThunk(
  "address/editAddress",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/addresses/${id}`, body);
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : "Network Error"
      );
    }
  }
);

const initialState = {
  createAddress: [],
  allAddresses: null,
  deleteAddress: [],
  editAddress: [],
  singleAddress: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.createAddress = action.payload;
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.createAddress = action.payload;
        state.error = action.payload;
      })
      .addCase(fetchAllAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.allAddresses = action.payload;
        console.log(action.payload)
      })
      
      .addCase(fetchAllAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
        console.log("Error fetching addresses:", action.payload);
      })
      
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteAddress = action.payload;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.deleteAddress = action.payload;
        state.error = action.payload;
      })
      .addCase(editAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.editAddress = action.payload;
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOneAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.singleAddress = action.payload;
      })
      .addCase(fetchOneAddress.rejected, (state, action) => {
        state.loading = false;
        state.singleAddress = action.payload;
        state.error = action.payload;
      });
  },
});

export default addressSlice.reducer;