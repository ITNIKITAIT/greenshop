import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import { IProduct } from '../components/Products/Products';
import { ICategory } from '../components/Filter/Category';
import { IFilter } from '../utils/getSearchParams';
// import { GetSearchParams } from '../utils/getSearchParams';

type PaginationProducts = {
    products: IProduct[];
    pages: number;
};

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL + '/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<PaginationProducts, void>({
            query: () => `/`,
        }),
        getSortedProducts: builder.query<PaginationProducts, IFilter>({
            query: ({ type, from, to, category, sortBy, page }) => {
                let queryParams = `?type=${type}&from=${from}&to=${to}&page=${page}`;

                if (category) queryParams += `&category=${category}`;
                if (sortBy) queryParams += `&sortBy=${sortBy}`;

                return queryParams;
            },
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id) => `/${id}`,
        }),
        getReletedProducts: builder.query<IProduct[], string>({
            query: (productId) => `/releted?productId=${productId}`,
        }),
        getProductBySearch: builder.query<IProduct[], string>({
            query: (q) => `/search?q=${q}`,
        }),
        getCategory: builder.query<ICategory[], void>({
            query: () => `/category`,
        }),
    }),
});
