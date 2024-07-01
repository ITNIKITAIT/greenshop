import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../components/Products/Products';

interface CartItem extends IProduct {
    quantity: number;
}

type shoppingCartState = {
    items: CartItem[];
};

const initialState: shoppingCartState = { items: [] };

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    selectors: {
        allProducts: (state) => state,
        amountProducts: (state) =>
            state.items.reduce((acc, item) => acc + item.quantity, 0),
    },
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const product = action.payload;
            const existingProduct = state.items.find(
                (item) => item.id === product.id
            );
            if (existingProduct) existingProduct.quantity += product.quantity;
            else state.items.push(product);
        },
    },
});

export const { addProduct } = shoppingCartSlice.actions;
export const { allProducts, amountProducts } = shoppingCartSlice.selectors;
export default shoppingCartSlice.reducer;
