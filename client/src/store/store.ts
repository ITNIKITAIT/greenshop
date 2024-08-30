import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import shoppingCartReducer from '../modules/shoppingCart.slice';
import { productApi } from '../api/productApi';
import { cartApi } from '../api/cartApi';
import { orderApi } from '../api/orderApi';

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(cartApi.middleware)
            .concat(orderApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
