import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/consts';
import {
    TFormLoginSchema,
    TFormRegisterSchema,
} from '../components/Authorization/auth-form-schema';
import { RootState } from '../store/store';
import { IUser } from '../modules/auth.slice';

interface UserDTO {
    token: string;
    user: IUser;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/auth',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserDTO, TFormLoginSchema>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData,
            }),
        }),
        register: builder.mutation<UserDTO, TFormRegisterSchema>({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            }),
        }),
        checkAuth: builder.query<UserDTO, void>({
            query: () => '/check-auth',
        }),
    }),
});
