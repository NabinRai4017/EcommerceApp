import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from '../model/product'
import { BASE_URL } from '.';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], string>({
            query: () => 'products',
        }),

    })
})

export const { useGetProductsQuery } = productApi;