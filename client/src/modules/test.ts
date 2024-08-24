import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../utils/consts';
import { cartApi } from '../api/cartApi';

export const fetchCart = createAsyncThunk(
    'shoppingCart/fetchCart',
    async (_, thunkAPi) => {
        // const response = await fetch(API_URL + '/cart', {
        //     method: 'GET',
        //     credentials: 'include',
        // });

        // const data = await response.json();
        const response = await thunkAPi
            .dispatch(cartApi.endpoints.getCart.initiate())
            .unwrap();
        return response;
    }
);

export default fetchCart;
