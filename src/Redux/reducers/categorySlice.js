import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteData,
  fetchData,
  postDataWithImage,
} from "../../Hooks/httpRequests";
// import baseURL from "../../Api/BaseURL";

// Create an AsyncThunk to fetch All category from the API
export const fetchAllCategories = createAsyncThunk(
  "category/fetchCategory", //  Action typea
  async ({ limit }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/categories/?limit=${limit}`);
      if (response.data.data && response.data.data.length > 0) {
        return {
          categories: response.data.data,
          paginationResult: response.data.paginationResult,
          results: response.data.results
        };
      } else {
        return { categories: [] };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
// Create an AsyncThunk to fetch All category from the API witch pagination
export const fetchAllCategoriesPage = createAsyncThunk(
  "category/fetchCategory",
  async ({limit, page }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `api/v1/categories/?&limit=${limit}&page=${page}`
      ); // return Page number
      if (response.data.data && response.data.data.length > 0) {
        return {
          categories: response.data.data,
          paginationResult: response.data.paginationResult,
          results: response.data.results
        };
      } else {
        return { categories: [], totalPages: 0 };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

export const fetchOneCategory = createAsyncThunk(
  "category/fetchOneCategory",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/categories/${id}`);
      if (response.data) {
        return {
          oneCategory: response.data.data || [],
        };
      } else {
        return { oneCategory: [] };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Create an AsyncThunk to creat category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await postDataWithImage(`api/v1/categories/`, formData);

      if (response.data) {
        return response.data; // Adjust based on your API's response structure
      } else {
        return { categories: [], totalPages: 0 };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "review/deleteCategory",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/categories/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  categories: [],
  deleteCat: [],
  paginationResult: [],
  results: [],
  oneCategory: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //========================== Handle fetchAllCategories ========================== //
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
        state.paginationResult = action.payload.paginationResult;
        state.results = action.payload.results;
        
      })

      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchOneCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.oneCategory = action.payload.oneCategory || [];
      })

      .addCase(fetchOneCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //========================== Start Handle createCategory async thunk ========================== //
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteCat = action.payload;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
