import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

export interface Product{
    id: number;
    title: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
}

interface ProductState{
    products: Product[];
    status: string;
    error: string;
}

const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: '',
};

export const fetchProducts = createAsyncThunk(
    'product/fetch',
    async(thunkAPI) => {
        const response = await fetch(PRODUCT_API_URL, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    },
);


export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(
            fetchProducts.fulfilled,
            (state, action) => {
                console.log('succeeded')
                state.status = 'succeeded';
                state.products = action.payload;
            }
        )
        .addCase(
            fetchProducts.pending,
            (state, action) => {
                console.log('loading')
                state.status = 'loading';
            }
        )
        .addCase(
            fetchProducts.rejected,
            (state, action) => {
                console.log('failed')
                state.status = 'failed';
                state.error = action.error.message ?? 'error'
            }
        )

        // other cases
    }
});


export default ProductSlice.reducer;

const products = (state: RootState) => state.product.products;
export const allProducts = createSelector([products], (products) => {
    return products;
});

const status = (state: RootState) => state.product.status;
export const productsStatus = createSelector([status], (status) => {
    return status;
});

const error = (state: RootState) => state.product.error;
export const productsError = createSelector([error], (error) => {
    return error;
});
