import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { IProduct } from '../components/Products/Products';
import { SortType } from '../components/Products/Sort';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => `/`,
        }),
        getSortedProducts: builder.query<IProduct[], SortType>({
            query: (type) => `?sort=${type}`,
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id) => `/${id}`,
        }),
        getReletedProducts: builder.query<IProduct[], void>({
            query: () => '/releted',
        }),
    }),
});
