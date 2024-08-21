import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { FilterType, IProduct } from '../components/Products/Products';
import { ICategory } from '../components/Filter/Category';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => `/`,
        }),
        getSortedProducts: builder.query<IProduct[], FilterType>({
            query: ({ type, from, to }) => {
                let queryParams = `?`;
                if (type) {
                    queryParams += `&sort=${type}`;
                }
                if (from) {
                    queryParams += `&from=${from}`;
                }
                if (to) {
                    queryParams += `&to=${to}`;
                }
                return queryParams;
            },
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id) => `/${id}`,
        }),
        getReletedProducts: builder.query<IProduct[], void>({
            query: () => '/releted',
        }),
        getProductBySearch: builder.query<IProduct[], string>({
            query: (q) => `/search?q=${q}`,
        }),
        getCategory: builder.query<ICategory[], void>({
            query: () => `/category`,
        }),
    }),
});
