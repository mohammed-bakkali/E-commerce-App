import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postDataWithImage,
  deleteData,
  fetchData,
  UpdatetDataWithImage,
} from "../../Hooks/httpRequests";
import { config } from "@fortawesome/fontawesome-svg-core";

// AsyncThunk to create a product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await postDataWithImage(`/api/v1/products/`, formData);
      return response.data || { products: [], totalPages: 0 };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// AsyncThunk to fetch all products
export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async ({ limit }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`/api/v1/products?limit=${limit}`);
      console.log("fetchAllProducts", response.data.results);
      return {
        products: response.data.data,
        paginationResult: response.data.paginationResult,
        numberOfProducts: response.data.results,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
// AsyncThunk to fetch all products by category
export const fetchAllProductsByCategory = createAsyncThunk(
  "product/fetchAllProductsByCategory",
  async ({ limit, page, categoryID }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `/api/v1/products?page=${page}&limit=${limit}&category=${categoryID}`
      );
      console.log("seliceCatgory", response);
      return {
        products: response.data.data,
        paginationResult: response.data.paginationResult,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// AsyncThunk to fetch all products by brand
export const fetchAllProductsByBrand = createAsyncThunk(
  "product/fetchAllProductsByBrand",
  async ({ limit, page, brandID }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `/api/v1/products?page=${page}&limit=${limit}&brand=${brandID}`
      );
      console.log("seliceBrand", response);
      return {
        products: response.data.data,
        paginationResult: response.data.paginationResult,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Fetch all products with pagination and page number
export const fetchAllProductsPages = createAsyncThunk(
  "product/fetchAllProducts",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await fetchData(
        `/api/v1/products?page=${page}&limit=${limit}`
      );
      return {
        products: response.data.data,
        paginationResult: response.data.paginationResult,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Fetch all products with  query string
export const fetchAllProductsSearch = createAsyncThunk(
  "product/fetchAllProducts",
  async ({ queryString }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`/api/v1/products?${queryString}`);
      return {
        products: response.data.data,
        paginationResult: response.data.paginationResult,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// AsyncThunk to fetch one product
export const fetchOneProduct = createAsyncThunk(
  "product/fetchOneProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`/api/v1/products/${id}`);
      return {
        product: response.data.data,
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
export const fetchProductLike = createAsyncThunk(
  "product/fetchProductLike",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchData(`api/v1/products?category=${id}`);
      return {
        similarProducts: response.data.data || [],
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);
// Delet product witch ID
export const deletProduct = createAsyncThunk(
  "product/deletProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteData(
        `api/v1/products/${id}`,
        "DELETE",
        config
      );
      return {
        deletProduct: response.data.data || [],
      };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network Error"
      );
    }
  }
);

// Edit product witch ID
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await UpdatetDataWithImage(
        `/api/v1/products/${id}`,
        formData
      );
      return {
        editProduct: response.data.data || [],
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Initial state for the slice
const initialState = {
  products: [],
  paginationResult: [],
  Allproducts: [],
  numberOfProducts: [],
  AllproductsBycat: [],
  AllproductsBybrand: [],
  similarProducts: [],
  OneProduct: null, // Selected product state
  deletProduct: [],
  editProduct: [],
  totalPages: 0,
  loading: false,
  error: null,
};

// Create the product slice
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Creat product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetch All product
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.numberOfProducts = action.payload.numberOfProducts;
        state.Allproducts = action.payload.products;
        state.paginationResult = action.payload.paginationResult;
    })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetch products  by category
      .addCase(fetchAllProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.AllproductsBycat = action.payload.products;
        state.paginationResult = action.payload.paginationResult;
      })
      .addCase(fetchAllProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetch products  by brand
      .addCase(fetchAllProductsByBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProductsByBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.AllproductsBybrand = action.payload.products;
        state.paginationResult = action.payload.paginationResult;
      })
      .addCase(fetchAllProductsByBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetch one Product
      .addCase(fetchOneProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.OneProduct = action.payload.product;
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetch Product Like
      .addCase(fetchProductLike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductLike.fulfilled, (state, action) => {
        state.loading = false;
        state.similarProducts = action.payload.similarProducts;
      })

      .addCase(fetchProductLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delet product
      .addCase(deletProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.deletProduct = action.payload.deletProduct;
      })

      .addCase(deletProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // edit product
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.editProduct = action.payload.editProduct;
      })

      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer as the default export
export default ProductSlice.reducer;
