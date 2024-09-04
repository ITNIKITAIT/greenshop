import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import shoppingCartReducer from '../modules/shoppingCart.slice';
import authReducer from '../modules/auth.slice';
import { productApi } from '../api/productApi';
import { cartApi } from '../api/cartApi';
import { orderApi } from '../api/orderApi';
import { authApi } from '../api/authApi';

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(cartApi.middleware)
            .concat(orderApi.middleware)
            .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
