import { createSlice } from '@reduxjs/toolkit';
import { fetchWishList } from './fetching';
import { WishlistDTO } from '../api/wishlistApi';

const initialState: WishlistDTO = {
    items: [],
};

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    selectors: {
        selectItemById: (state, id: number) =>
            state.items.some((item) => item.productId === id),
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWishList.fulfilled, (state, action) => {
            state.items = action.payload.items;
        });
    },
});

export const { selectItemById } = wishListSlice.selectors;

export default wishListSlice.reducer;
