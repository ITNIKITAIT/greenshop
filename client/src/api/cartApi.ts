import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { CartDTO } from '../utils/cartDetails';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/cart',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getCart: builder.query<CartDTO, void>({
            query: () => `/`,
        }),
        updateCart: builder.mutation<CartDTO, { id: number; quantity: number }>(
            {
                query: ({ id, quantity }) => ({
                    url: `/${id}`,
                    method: 'PATCH',
                    body: { quantity },
                }),
            }
        ),
    }),
});
