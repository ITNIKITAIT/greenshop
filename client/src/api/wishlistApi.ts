import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { IProduct } from '../components/Products/Products';

type WishProps = {
    userId: number;
    productId: number;
};

interface WishlistDTO {
    id: number;
    items: WishItem[];
}

interface WishItem {
    id: number;
    product: IProduct;
}

export const wishlistApi = createApi({
    reducerPath: 'wishlistApi',
    tagTypes: ['wishlist'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/auth/wishlist',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getWishlist: builder.query<WishlistDTO, number>({
            query: (userID) => `/get/${userID}`,
            providesTags: ['wishlist'],
        }),
        addWishItem: builder.mutation<WishlistDTO, WishProps>({
            query: ({ userId, productId }) => ({
                url: `/add`,
                method: 'POST',
                body: { userId, productId },
            }),
            invalidatesTags: ['wishlist'],
        }),
        removeWishItem: builder.mutation<WishlistDTO, WishProps>({
            query: ({ userId, productId }) => ({
                url: `/remove`,
                method: 'DELETE',
                body: { userId, productId },
            }),
            invalidatesTags: ['wishlist'],
        }),
    }),
});
