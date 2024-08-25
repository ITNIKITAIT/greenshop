import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../api/cartApi';
import { getCartDetails } from '../utils/cartDetails';
import { store } from '../store/store';

export const fetchCart = createAsyncThunk(
    'shoppingCart/fetchCart',
    async (_, thunkAPi) => {
        const response = await thunkAPi
            .dispatch(cartApi.endpoints.getCart.initiate())
            .unwrap();

        return getCartDetails(response);
    }
);

export const dispathCart = async () => {
    store.dispatch(fetchCart());
};

export default fetchCart;
