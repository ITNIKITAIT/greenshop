import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { FieldValues } from 'react-hook-form';

export interface OrderDTO {
    id: number;
    address: string;
    city: string;
    comment: string;
    country: string;
    createdAt: string;
    email: string;
    fullName: string;
    items: JSON;
    paymentId: string;
    status: 'SUCCEEDED' | 'CANCELLED' | 'PENDING';
    totalAmount: number;
    updatedAt: string;
    userId: number;
    zip: string;
}

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/order',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        createOrder: builder.mutation<string, FieldValues>({
            query: (data) => ({
                url: `/`,
                method: 'POST',
                body: data,
            }),
        }),
        getOrder: builder.query<OrderDTO, string>({
            query: (orderId) => `/${orderId}`,
        }),
        getOrdersByUser: builder.query<OrderDTO[], number>({
            query: (userId) => `/user/${userId}`,
        }),
    }),
});
