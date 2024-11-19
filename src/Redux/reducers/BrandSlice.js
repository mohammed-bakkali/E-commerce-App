import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, fetchData, postDataWithImage, UpdateData } from "../../Hooks/httpRequests";

// Create an AsyncThunk to fetch all brands from the API
export const fetchAllBrands = createAsyncThunk(
  "brand/fetchBrands",
  async ({ limit }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/brands/?limit=${limit}`);
      if (response.data.data && response.data.data.length > 0) {
        return {
          brands: response.data.data, 
          paginationResult: response.data.paginationResult,
          results: response.data.results
        };
      } else {
        return { brands: [], totalPages: 0 }; // No data found
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

export const fetchAllBrandsPage = createAsyncThunk(
  "brand/fetchBrands",
  async ({ limit, page }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/brands/?&limit=${limit}&page=${page}`); 

      if (response.data.data && response.data.data.length > 0) {
        return {
          brands: response.data.data,
          paginationResult: response.data.paginationResult,
          results: response.data.results
        };
      } else {
        return { brands: [], totalPages: 0 }; // No data found
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Create an AsyncThunk to create a brand
export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await postDataWithImage(`api/v1/brands/`, formData);
      if (response.data) {
        return response.data; // Adjust based on your API's response structure
      } else {
        return { brands: [], totalPages: 0 };
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Create an AsyncThunk to fetch a single brand by ID
export const fetchOneBrand = createAsyncThunk(
  "brand/fetchOneBrand",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/brands/${id}`)
      if (response.data) {
        return {
          oneBrand: response.data.data || [], // Return the brand details
        };
      } else {
        return rejectWithValue("Brand not found");
      }
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "delet/deleteBrand",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(`/api/v1/brands/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editeProductReview = createAsyncThunk(
  "review/editeProductReview",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await UpdateData(`/api/v1/reviews/${id}`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



const initialState = {
  brands: [],
  paginationResult: [],
  loading: false,
  results: [],
  error: null,
  oneBrand: [],
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Handling fetchAllBrands actions
      .addCase(fetchAllBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.brands;
        state.paginationResult = action.payload.paginationResult;
        state.results = action.payload.results;
      })
      .addCase(fetchAllBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handling createBrand actions
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.push(action.payload);
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handling fetchOneBrand actions
      .addCase(fetchOneBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.oneBrand = null; // Reset currentBrand while loading
      })
      .addCase(fetchOneBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.oneBrand = action.payload.oneBrand; // Store fetched brand details
      })
      .addCase(fetchOneBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      // 
      
  },
});

export default brandSlice.reducer;
