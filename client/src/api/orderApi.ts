import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { FieldValues } from 'react-hook-form';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/order',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        createOrder: builder.mutation<void, FieldValues>({
            query: (data) => ({
                url: `/`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});
