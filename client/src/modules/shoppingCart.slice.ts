import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../components/Products/Products';
import { withDiscount } from '../utils/discountFunc';

export interface ICartItem extends IProduct {
    quantity: number;
}

type shoppingCartState = {
    items: ICartItem[];
};

const initialState: shoppingCartState = { items: [] };

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    selectors: {
        allProducts: (state): ICartItem[] => state.items,
        amountProducts: (state): number =>
            state.items.reduce((acc, item) => acc + item.quantity, 0),
        fullPrice: (state): number =>
            state.items.reduce(
                (acc, item) =>
                    acc + withDiscount(item.price, item.sale) * item.quantity,
                0
            ),
        priceWithDelivery: (state): number =>
            state.items.reduce(
                (acc, item) =>
                    acc +
                    withDiscount(item.price, item.sale) * item.quantity +
                    3 * item.quantity,
                0
            ),
    },
    reducers: {
        addProduct: (state, action: PayloadAction<ICartItem>) => {
            const product = action.payload;
            const existingProduct = state.items.find(
                (item) => item.id === product.id
            );
            if (existingProduct) existingProduct.quantity += product.quantity;
            else state.items.push(product);
        },
        addOneProduct: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const currProduct = state.items.find(
                (item) => item.id === id
            ) as ICartItem;
            currProduct.quantity += 1;
        },
        deleteFullProduct: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.items.splice(
                state.items.findIndex((item) => item.id === id),
                1
            );
        },
        deleteOneProduct: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const currProduct = state.items.find(
                (item) => item.id === id
            ) as ICartItem;
            currProduct.quantity -= 1;
        },
        resetProducts: (state, action) => {
            state.items = [];
        },
    },
});

export const {
    addProduct,
    deleteOneProduct,
    deleteFullProduct,
    addOneProduct,
    resetProducts,
} = shoppingCartSlice.actions;
export const { allProducts, amountProducts, fullPrice, priceWithDelivery } =
    shoppingCartSlice.selectors;
export default shoppingCartSlice.reducer;
