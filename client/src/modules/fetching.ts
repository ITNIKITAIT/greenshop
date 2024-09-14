import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../api/cartApi';
import { getCartDetails } from '../utils/cartDetails';
import { authApi } from '../api/authApi';
import { wishlistApi } from '../api/wishlistApi';

export const fetchCart = createAsyncThunk(
    'shoppingCart/fetchCart',
    async (_, thunkAPi) => {
        const response = await thunkAPi
            .dispatch(cartApi.endpoints.getCart.initiate())
            .unwrap();

        return getCartDetails(response);
    }
);

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, thunkAPi) => {
        const response = await thunkAPi
            .dispatch(authApi.endpoints.checkAuth.initiate())
            .unwrap();

        return response;
    }
);

export const fetchWishList = createAsyncThunk(
    'wishList/fetchWishList',
    async (userId: number, thunkAPi) => {
        const response = await thunkAPi
            .dispatch(wishlistApi.endpoints.getWishlist.initiate(userId))
            .unwrap();

        return response;
    }
);
