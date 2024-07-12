import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../utils/consts';
import { IProduct } from '../components/Products/Products';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: API + '/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => `/`,
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id) => `/${id}`,
        }),
    }),
});
