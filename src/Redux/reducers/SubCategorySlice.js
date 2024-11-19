import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, fetchData, deleteData } from "../../Hooks/httpRequests";
// import baseURL from "../../Api/BaseURL";

// Create an AsyncThunk to creat sub-category
export const createSubcategory = createAsyncThunk(
  "category/createsubCategory",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await postData(`/api/v1/subcategories`, data);
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
      console.log("fetchOneCategory", response);
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

export const fetchAllSubCategory = createAsyncThunk(
  "subcategory/fetchAllSubCategory",
  async ({page, limit}, { rejectWithValue }) => {
    try {
      const response = await fetchData(`/api/v1/subcategories/?page=${page}&limit=${limit}`);
      if (response) {
        return {
          Allsubcategories: response.data.data,
          paginationResult: response.data.paginationResult,
          results: response.data.results,
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

export const deleteSubCategory = createAsyncThunk(
  "subcategory/deleteSubCategory",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/subcategories/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

const initialState = {
  subcategories: [], //  List of categories
  Allsubcategories: [],
  results: [],
  paginationResult: [],
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
      })
      //
      .addCase(fetchAllSubCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.Allsubcategories = action.payload.Allsubcategories;
        console.log(state.Allsubcategories);
        state.paginationResult = action.payload.paginationResult;
        state.results = action.payload.results;
      })
      .addCase(fetchAllSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subcategorySlice.reducer;
