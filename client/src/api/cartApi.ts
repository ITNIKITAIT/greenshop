import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { ICart } from '../modules/shoppingCart.slice';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/cart',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getCart: builder.query<ICart, void>({
            query: () => `/`,
        }),
    }),
});
