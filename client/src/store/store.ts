import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import shoppingCartReducer from '../modules/shoppingCart.slice';
import { productApi } from '../api/productApi';

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
