import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { CartDTO } from '../utils/cartDetails';
import { ICartItem } from '../modules/shoppingCart.slice';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    tagTypes: ['Cart'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/cart',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getCart: builder.query<CartDTO, void>({
            query: () => `/`,
            providesTags: ['Cart'],
        }),
        updateCart: builder.mutation<CartDTO, { id: number; quantity: number }>(
            {
                query: ({ id, quantity }) => ({
                    url: `/${id}`,
                    method: 'PATCH',
                    body: { quantity },
                }),
                invalidatesTags: ['Cart'],
            }
        ),
        deleteCartItem: builder.mutation<void | { error: string }, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart'],
        }),
        addCartItem: builder.mutation<void, ICartItem>({
            query: (product) => ({
                url: `/`,
                method: 'POST',
                body: { product },
            }),
            invalidatesTags: ['Cart'],
        }),
    }),
});
