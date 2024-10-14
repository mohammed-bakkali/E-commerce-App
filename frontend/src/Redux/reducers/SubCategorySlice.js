import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, fetchData } from "../../Hooks/httpRequests";
// import baseURL from "../../Api/BaseURL";



// Create an AsyncThunk to creat sub-category
export const createSubcategory = createAsyncThunk(
  "category/createsubCategory",
  async ({ data }, { rejectWithValue }) => {
    try {
      console.log("Data being sent:", data);
      const response = await postData(`/api/v1/subcategories`, data);
      console.log("API Response:", response);
      
      console.log("TEST RESPONSE", response);

      if (response) {
        return {
          subcategories: response.data.data,
        };
      } else {
        return { subcategories: [] };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
// Fetch the category using the ID
export const fetchOneCategory = createAsyncThunk(
  "subcategory/fetchOneCategory",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/categories/${id}/subcategories`);
      if (response) {
        return {
          subcategories: response.data.data,
        };
      } else {
        return { subcategories: [] };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

const initialState = {
  subcategories: [], //  List of categories
  totalPages: 0, // Total number of pages
  loading: false,
  error: null,
};

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //========================== Start Handle createCategory async thunk ========================== //
      .addCase(createSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories.push(action.payload);
      })
      .addCase(createSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //========================== Fetch One Category ========================== //
      .addCase(fetchOneCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload.subcategories;
        
      })
      .addCase(fetchOneCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subcategorySlice.reducer;
